import {FILTERING,SET_FILTERS} from '../constans';
import {createFilters} from '../helper';

export default (state = {}, action)=>{
    const {type, payload} = action;
    if(type === SET_FILTERS){
        const filters = createFilters(payload)
        return {
            ...state,
            filters: filters
        }
    }
    return state
}