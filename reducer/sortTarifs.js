import {SORT_TARIFS} from '../constans';


export default(state = false, action)=>{
    const {type} = action;
    switch(type){
        case SORT_TARIFS:
            return {
                ...state,
                sorting: !state.sorting
            }
        default:
            return state;
    }
}