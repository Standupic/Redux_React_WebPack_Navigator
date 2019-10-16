import {FILTERING} from '../constans';

export const performerFiltering = (obj) =>{
   console.log("action")
   return {
        type: FILTERING,
        param: obj
    }
}