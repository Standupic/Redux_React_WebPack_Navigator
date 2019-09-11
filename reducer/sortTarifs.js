import {SORT_TARIFS} from '../constans';

const initialState = {
    sorting: false
}

export default(state = initialState, action)=>{
    const {type,payload} = action;
    switch(type){
        case SORT_TARIFS:
            return Object.assign(state,{},{
                sorting: payload
            })
        default:
            return state;
    }
}