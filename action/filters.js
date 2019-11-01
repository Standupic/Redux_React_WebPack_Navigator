import {
    FILTERING,
    TOGGLE_FILTER
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
export const handleToggleCheckbox = () =>{
    return {

    }
}