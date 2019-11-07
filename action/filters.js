import {
    FILTERING,
    TOGGLE_FILTER,
    HIDE_SHOW_FITLERS
} from '../constans';

export const performerFiltering = (obj) =>{
   return {
        type: FILTERING,
        param: obj
    }
}

export const handleToggleFilter = (param) =>{ // {param:'region'}
    return{
        type: TOGGLE_FILTER,
        param: param
    }
}
export const handlerHideShowFilters = (flag) =>{
    return {
        type: HIDE_SHOW_FITLERS,
        flag: flag
    }
}