import {TAG_SEARCH,SET_TAG} from '../constans';

export const handlerTagsSearch = (obj) =>{
    return {
        type: TAG_SEARCH,
        tag: obj
    }
}

export const handlerSetTag = (obj) => {
    console.log(obj)
    return{
        type: SET_TAG,
        newTag: obj
    }
}