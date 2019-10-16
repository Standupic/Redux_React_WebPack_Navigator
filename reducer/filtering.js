import {FILTERING} from '../constans';
import {toMapImmutable} from '../helper';
import {Map} from "immutable";

const initialState = {
    "paramFilters": {},
    "is_seen": {
        "region" : true,
        "location" : true,
        "saleschannel" : true,
        "speed" : true,
        "internettv" : true,
    },
    "hideCheckbox": {
        "region" : [],
        "location" : [],
        "localizationbasis" : [],
        "typesuggestion" : [],
        "typeline" : []
    }
}

export default (state = false, action)=>{
    const {type, param} = action;
    console.log(action)
    if(type === FILTERING){
        console.log(state)
        // const merged = state['is_seen'].mergeWith((prev,next,key) =>{
        //     return next
        // }, Map(param))
            return {
                ...state,
            }
    }
    return state
}