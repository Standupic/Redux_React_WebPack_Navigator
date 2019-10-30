import {FILTERING,SET_FILTERS} from '../constans';

export const performerFiltering = (obj) =>{
   return {
        type: FILTERING,
        param: obj
    }
}

export const filterData = () =>{
    return{
        type: SET_FILTERS
    }
}
