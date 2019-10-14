import {SORT_TARIFS,
        ACS,
        DES,
        TYPE_SUGGESTION_A_Я,
        TYPE_SUGGESTION_Я_A,
        DEFAULT_VALUE} from '../constans';

export default(state = false, action)=>{
    const {type,payload} = action;
    switch(type){
        case SORT_TARIFS:
            console.log(payload)
            switch(payload){
                case ACS:
                    
            }
            return {
                ...state,
                sorting: payload
            }
        default:
            return state;
    }
}