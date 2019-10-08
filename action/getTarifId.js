import {GETTARIFID} from '../constans';

export const getTarifId =(id)=>{
    return{
        type: GETTARIFID,
        payload: id
    }
}