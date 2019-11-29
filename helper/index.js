import array from 'lodash/array';
import {List} from 'immutable';
import {isEqual} from 'lodash/lang';
import {reduce} from 'lodash/collection';
import { isObject } from 'util';


export function uniqId(){
	return '_' + Math.random().toString(36).substr(2, 9);
}

export function isNumeric(i) {
	return !isNaN(parseFloat(i)) && isFinite(i);
}

export function is_Array(item){
	return Object.prototype.toString.call(item) == "[object Array]";
}

export function is_Object(item){
	return Object.prototype.toString.call(item) == "[object Object]";
}

export function is_String(item){
	return Object.prototype.toString.call(item) == "[object String]"
}


export function debounce(func, wait = 250, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

export function pushElem(tags, obj){
    if(obj.position == 1) obj.position = 0
    return [
        ...tags.slice(0,obj.position),
        obj,
        ...tags.slice(obj.position)
    ]
}
export function deleteElem(list, index){
    return [
        ...list.slice(0,index),
        ...list.slice(index+1)
    ]
}

export function isEmpty(obj){
    return obj === null || obj === undefined || 
    (obj.hasOwnProperty("length") && obj.length === 0) ||
    (obj.constructor === Object && Object.keys(obj).length === 0)
}


export function getSameHeightTarifs(node){
    let nodes = Array.prototype.slice.call(node.childNodes);
    let WL = getComputedStyle(document.querySelector(".wrap-list")).height.replace("px","") * 1
    let WB = getComputedStyle(document.querySelector(".wrap-bottom")).height.replace("px","") * 1
    if(!nodes[0].classList.contains("an-navigator-compare-options")){
        return
    }
	let headerHeight = 0,listHeight = (WL+WB+21);
	nodes.forEach((elem)=>{
        let f = getComputedStyle(elem.firstElementChild).height.replace("px","") * 1;
        headerHeight = headerHeight < f ? f : headerHeight;
    })
	return {headerHeight,listHeight}
}

export function setSameHeightTarifs(selector){
	return document.querySelectorAll(selector);
}

export function reduceObject(obj){
    return reduce(obj, (acc,item,key)=>{
        if(item.length){
            return {...acc,[key]:obj[key]}
        }else{
            return {...acc}
        }
    },{})
}

export function filteringRanging(data,checked,sliderObj){
    return rangingTarifs(Object.keys(reduceObject(sliderObj)),multipleFiltering(data,checked),sliderObj)
}

export function rangingTarifs(keys,data,sliderObj) {
    return data.filter(item=>{
      return keys.every(key =>{
        return (item[key] >= sliderObj[key][0] && item[key] <= sliderObj[key][1])
      })
     }) 
}

export const hideShowFiltersInputs = (data, checked) =>{
   
    if (isEmpty(reduceObject(checked))) return false

    const hideFilters = {
        "region" : [],
        "location" : [],
        "localizationbasis" : [],
    }

     multipleFiltering(data, checked).map( item =>{
        for(let key in hideFilters){
            if(item[key]){
                if(is_Array(item[key])){
                    for(let i = 0; i < item[key].length; i++){
                        hideFilters[key].push(item[key][i])
                    }
                }else{
                    hideFilters[key].push(item[key])
                }
            }
        }
    })
    for(let key in hideFilters){
        hideFilters[key] = array.uniq(hideFilters[key])
    }
    return hideFilters
}

export const multipleFiltering = (data,checked) =>{
    return data.filter(item => {
        return Object.keys(checked).every(key => {
          if (!checked[key].length) return true;
          if (is_Array(item[key])) {
            for (var i = 0; i < item[key].length; i++) {
              if (checked[key].indexOf(item[key][i]) >= 0) {
                return true;
              }
            }
          } else {
            return checked[key].includes(item[key]);
          }
        });
    });
}

export function uniqArray(arr){
    var allItem = []
    if(is_Array(arr[0])){
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                allItem.push(arr[i][j].trim())
            }
        }
        return array.uniq(allItem).sort()
    }else{
        return arr.sort()
    }
}

export const pageNumbers = (l,count) =>{
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(l / count); i++){
        pageNumbers.push(i)
    }
    return pageNumbers;
}

export const separatorPage = (data, current, count) => {
	const lastIndex = current  * count;
    const firstIndex = lastIndex - count;
	const divided = data.slice(firstIndex,lastIndex);
	const lastIndexSection = Math.ceil(data.length / count);
		return {
            lastIndex: lastIndex,
            firstIndex: firstIndex,
            divided: divided,
            lastIndexSection: lastIndexSection,
	    }
}

export const getIndexTag = (tags,checked) =>{
    return tags.findIndex((item,index) => isEqual(item.value, getObjectChecked(checked)))
}

export const greatestValue = (tags) =>{
    return tags.sort(function(objA, objB){return objA.position - objB.position})
}


// IMAGE YOU GET DATA FROM DATA BASE ofcouse in perfect world :-)
const createObjectProperty = (defaultParams,data) =>{
        let obj = defaultParams.reduce(function(acc, tarif){
        return {...acc,[tarif['param']]:[]}
        },{})

		for(let i = 0; i < data.length; i++){
			for(let key in data[i]){
                obj[key] ? obj[key].push(data[i][key]) : obj
			}
		}
		for(let key in obj){
			obj[key] = array.uniq(obj[key])
        }
		return obj
	}

export const createFilters = (defaultParams,data)=>{
    const obj = createObjectProperty(defaultParams,data);
    const filters = defaultParams.reduce((acc,item,index)=>{ 
    if(item['filter']){
        return {...acc, [item['param']] : {
            ['values']: uniqArray(obj[item['param']]),
            ['filter']: item['filter'],
            ['name']: item['name'],
            ['param']: item['param'],
            ['active'] : item['param'] == 'navigatorprice' ? true : false,
            ['is_seen'] : item['is_seen']
            }}
        }
        return {...acc} 
    },{})

    const hide = defaultParams.reduce((acc,item)=>{
        if(item['filter']){
            return {...acc,[item['param']]:item['is_seen']} 
        }else{
            return  {...acc}
        }
      
    },{})
   
    const checked = defaultParams.reduce((acc,item)=>{
         if(item['filter']) {
            return {...acc, [item['param']]:[]}
         }
            return {...acc}
    },{})

    const slider = defaultParams.reduce((acc,item)=>{
        if(item['filter'] == "slider") {
           return {...acc, [item['param']]:[]}
        }
           return {...acc}
   },{})
    

    return {
        filters,
        checked,
        hide,
        slider
    }
}

export const getObjectChecked = (obj) =>{
    let result = {}
    for (var key in obj) {
        if (obj[key].length) {
            result = { ...result, [key]: List(obj[key])};
        }
    }
    return result
}


export const createLabels = (defaultParams)=>{
    return defaultParams.reduce((acc,item)=>{
        return {...acc, [item['param']]: item['name']}
    },[])
}


export const createHideShowData = (defaultParams) => {
    return defaultParams.reduce((acc,item)=>{
       return {...acc, [item['param']] : {
                ['param']: item['param'],
                ['name'] : item['name'],
                ['read_more'] : item['read_more']
              }
            } 
    },{})
}

