import {TAG_SEARCH,SET_TAG,DELETE_TAG} from '../constans';

export const handlerTagsSearch = (obj) =>{
    return {
        type: TAG_SEARCH,
        tag: obj
    }
}

export const handlerSetTag = (obj, id) => { //{value:{},title:str,id:num}
    return{
        type: SET_TAG,
        newTag: {...obj, id},
        generateId: true
    }
}

export const handlerDeleteTag = (id) =>{
    console.log(id)
    return {
        type: DELETE_TAG,
        id: id
    } 
}