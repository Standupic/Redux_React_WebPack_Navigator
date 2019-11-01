import {
    FILTERING,
    LOAD_FILTERS,
    TOGGLE_FILTER
} from '../constans';
import {Record, OrderedMap, List} from 'immutable';
import {objToMap,objToList} from './utils';
import {handleToggleFilter} from '../action';

const StructureState = Record({
    filters: new OrderedMap({}),
    checked: new OrderedMap({})
})

const MapFilter = Record({
    values: [],
    filter: null,
    name: null,
    active: false,
    param: null
})


export default (state = new StructureState(), action)=>{
    const {type, response} = action; 
    switch(type){
        case LOAD_FILTERS:
        return state
        .update('filters',(filters) => filters.merge(objToMap(response.filters,MapFilter)))
        .update('checked',(checked) => checked.merge(objToList(response.checked)))

        case TOGGLE_FILTER:
        const {param} = action;
        param
        return state
        .updateIn(['filters',param,'active'], (active) => !active)
        default: 
            return state
    }
}