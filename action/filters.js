import {FILTERING} from '../constans';

export const performerFiltering = (obj) =>{
   return {
        type: FILTERING,
        param: obj
    }
}