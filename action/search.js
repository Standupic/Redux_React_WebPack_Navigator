import {SEARCH} from '../constans';

export const searchHandler = (str) =>{
    console.log(str)
    return {
        type: SEARCH,
        str
    }
}