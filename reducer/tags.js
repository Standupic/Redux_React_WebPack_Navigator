import {SET_TAGS} from '../constans';

export default (state = [], action) =>{
    const {type, payload} = action;
    if(type === SET_TAGS){
        return {
            ...state,
            tags: payload
        }
    }
    return state
}