import {Map} from "immutable";
import data from '../data/tarifs';

import {SORT_TARIFS} from '../constans';

export default(state = false, action)=>{
    const {type,payload} = action;
    switch(type){
        case SORT_TARIFS:
            return{
                ...state,
                type: payload
            }
        default:
            return state;
    }
}