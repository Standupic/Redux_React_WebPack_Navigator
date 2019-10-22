import {SET_TAGS} from '../constans';
import {greatestValue} from '../helper'

export default (state = [], action) =>{
    const {type, payload} = action;
    if(type === SET_TAGS){
        const tags = greatestValue(payload)
        return {
            ...state,
            tags: tags
        }
    }
    return state
}