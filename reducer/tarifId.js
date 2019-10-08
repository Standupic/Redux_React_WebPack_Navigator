import {GETTARIFID} from '../constans';

export default (state = false, action)=>{
    const {type,payload} = action;
    if(type === GETTARIFID){
        return {
            ...state,
            tarifId: payload
        }
    }else{
        return state
    }
}