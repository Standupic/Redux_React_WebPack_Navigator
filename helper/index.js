import array from 'lodash/array';
import {Map} from 'immutable';

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

export function pushElem(list, elem, position){
    if(position == 1) position = 0
    return [
        ...list.slice(0,position),
        elem,
        ...list.slice(position)
    ]
}
export function deleteElem(list, index){
    return [
        ...list.slice(0,index),
        ...list.slice(index+1)
    ]
}

export function isEmpty (prop){
    return prop === null || prop === undefined || 
    (prop.hasOwnProperty("length") && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0);
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
        if(type == "slider"){
            return {from: 0, to: 5000}
        }
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

export function newStructure(data, defaultParams, tags){
    let deParL = defaultParams.length;
    let daL = data.length;
 	const createObjectProperty = (defaultParams) =>{
        let obj = defaultParams.reduce(function(acc, tarif){
        return {...acc,[tarif['param']]:[]}
        },{})

		for(let i = 0; i < daL; i++){
			for(let key in data[i]){
                obj[key] ? obj[key].push(data[i][key]) : obj
			}
		}
		for(let key in obj){
			obj[key] = array.uniq(obj[key])
		}
		return obj
	}

	const createFiltersLabels = (defaultParams) =>{

		const obj = createObjectProperty(defaultParams);
		const filters = [];
        const labels = {}; 
		for(let i = 0; i < deParL; i++){
				if(defaultParams[i]['filter']){
                    let type = defaultParams[i]['filter'];
                    let key = defaultParams[i]["param"];
					filters.push({	
								[key]: uniqArray(obj[key],type),
								['filter']: type,
								['name']  : defaultParams[i]['name'],
								['param'] : key,
								['checked'] : type == "checkbox" ? [] : [],
                                ['active'] : false,
                                ['is_seen']: defaultParams[i]['is_seen']
							})
				}
				labels[defaultParams[i]['param']] = defaultParams[i]['name']
		}
        
		return {
			filters: filters.reduce((acc, item) => {
                return { ...acc, [item["param"]]: item };
              }, {}),
			labels
		}
    }
	
	const maxMinValue = (arr) => {
		arr.sort((a,b)=>{a - b})
		return {from: arr[0], to: arr[arr.length-1]}
	}

	const trimString=(arr)=>{
		for(let i = 0; i < arr.length; i++){
			arr[i]+="";
		}
		return arr
	}
	
	const hideShowData = (defaultParams) => {
		var hideShow = {},
            checkbox = []
       
		for(let i = 0; i < deParL; i++){
            hideShow[defaultParams[i]['param']] = defaultParams[i]['read_more'];
            checkbox.push({
                "param" : defaultParams[i]['param'],
                "name" : defaultParams[i]['name'],
                "hideShow" : defaultParams[i]['read_more'],
                [defaultParams[i]['param']] : defaultParams[i]['read_more']
            })
		}
		return {
			hideShow: hideShow,
			checkbox: checkbox
		}
	}

	var FiltersLabels = createFiltersLabels(defaultParams)
	var hideShowCheckbox = hideShowData(defaultParams)

	return {
            filters: FiltersLabels.filters,
			labels: FiltersLabels.labels,
			hideShowData: hideShowCheckbox.hideShow,
			checkboxHideShow: hideShowCheckbox.checkbox,
			greatestValue: tags.sort(function(objA, objB){return objA.position - objB.position}),
            data
        }
}
