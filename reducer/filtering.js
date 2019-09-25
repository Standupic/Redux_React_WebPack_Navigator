import {FILTERING} from '../constans';

export default (state = false, action)=>{
    const {type} = action;
    if(type === FILTERING){
        return {
            ...state,
            filtering: !state.filtering
        }
    }else{
        return state
    }
}