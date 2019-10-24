import {FILTERING,SET_FILTERS} from '../constans';
import {fromJS,get,toJS} from 'immutable';

export default (state = {}, action)=>{
    const {type, payload} = action;
    if(type === SET_FILTERS){
        return {
            ...state,
            filters: payload
        }
    }
    if(type === "ONCHANGE_SLIDER"){

        return fromJS(state.filters).get("navigatorprice").get("values").set(0,action.data[0]).set(1,action.data[1]).toJS()
    }
    return state
}