import {TAG_SEARCH} from '../constans';

export const handlerTagsSearch = (obj) =>{
    return {
        type: TAG_SEARCH,
        tag: obj
    }
}