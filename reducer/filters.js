import {FILTERING,SET_FILTERS} from '../constans';
import {Map, fromJS, toJS, OrderedMap} from 'immutable';


export default (state={}, action)=>{
    const {type, payload} = action; // Why have you done this, data returns on default 
    if(type === SET_FILTERS){
        // // console.log(payload,"payload")
        // state = state.set("filters", OrderedMap(payload))

        // console.log(state.get("filters"), "reducer")
        // return state = state.set("filters", OrderedMap(payload))
    return {
    filters: payload
    }

    }
    if(type === "ACTIVE"){
        return{
                ...state,
                filters:{...state.filters,
                region:{
                    ...state.filters.region,
                    active: !state.filters.region.active
                }
            }
        }
    }
    return state
}