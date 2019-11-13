import array from 'lodash/array';
import {toJS,toArray, Record} from 'immutable';
import {isEqual} from 'lodash/lang';
import {objToMap} from '../reducer/utils';
import {reduce} from 'lodash/collection';
import { func } from 'prop-types';

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

export function pushElem(tags, elem, Record){
    tags = tags.toArray();
    if(elem.position == 1) elem.position = 0
    return [
        ...tags.slice(0,elem.position),
        [elem.position, new Record(elem)],
        ...tags.slice(elem.position)
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

export function foo(obj){
    return reduce(obj, (acc,item,key)=>{
        if(item.length){
            return {...acc,[key]:obj[key]}
        }else{
            return {...acc}
        }
    },{})
}
export function isEmptyFilters(obj){
    return foo(obj)
    // return Object.values(obj).map((item)=>{
    //     return item.length
    //   }).reduce((acc,item) => {
    //     return acc + item
    // },0)
}

export function uniqArray(arr,type){
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


export function separator(data, current, countTarifs){
	const lastIndex = current  * countTarifs;
	const firstIndex = lastIndex - countTarifs;
	const divided = data.slice(firstIndex,lastIndex);
	const lastIndexSection = Math.ceil(data.length / countTarifs);
		return {
            lastIndex: lastIndex,
            firstIndex: firstIndex,
            divided: divided,
            lastIndexSection: lastIndexSection,
	    }
}

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
    const filters = defaultParams.reduce((acc,item)=>{ 
    if(item['filter']){
        return {...acc, [item['param']] : {
            ['values']: uniqArray(obj[item['param']]),
            ['filter']: item['filter'],
            ['name']: item['name'],
            ['param']: item['param'],
            ['active'] : false,
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
            result = { ...result, [key]: obj[key]};
        }
    }
    return result
}


const getValuesFromTags = (arr) =>{
    return arr.reduce((acc,item)=>{
        return [...acc, item.value]
    },[])
}

export const getIndexTag = (props) =>{
    const {tags, checked} = props;
    return getValuesFromTags(tags.toJS()).findIndex(item => isEqual(item, getObjectChecked(checked)))
}

export const createLabels = (defaultParams)=>{
    return defaultParams.reduce((acc,item)=>{
        return {...acc, [item['param']]: item['name']}
    },[])
}


export const CreateHideShowData = (defaultParams) => {
    return defaultParams.reduce((acc,item)=>{
       return {...acc, [item['param']] : {
                ['param']: item['param'],
                ['name'] : item['name'],
                ['read_more'] : item['read_more']
              }
            } 
    },{})
}

export const greatestValue = (tags) =>{
    return tags.sort(function(objA, objB){return objA.position - objB.position})
}

