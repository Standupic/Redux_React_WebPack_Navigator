import {SORT_TARIFS} from '../constans';

export const sortTarifs =(str)=>{
    return{
        type: SORT_TARIFS,
        payload: str
    }
}