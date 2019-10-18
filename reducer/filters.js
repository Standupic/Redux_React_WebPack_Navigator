import {FILTERING} from '../constans';

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

export default (state = initialState, action)=>{
    const {type, param} = action;
    if(type === FILTERING){
        return {
            ...state,
            paramFilters: Object.assign({},state.paramFilters,param)
        }
    }
    return state
}