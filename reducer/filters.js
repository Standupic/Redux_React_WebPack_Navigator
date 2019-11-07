import {
    FILTERING,
    LOAD_FILTERS,
    TOGGLE_FILTER,
    HIDE_SHOW_FITLERS
} from '../constans';
import {Record, OrderedMap, List, toJS} from 'immutable';
import {objToMap,objToList} from './utils';
// import {handleToggleFilter} from '../action';

const StructureState = Record({
    filters: new OrderedMap({}),
    checked: new OrderedMap({}),
    hide: new OrderedMap({})
})

const MapFilter = Record({
    values: [],
    filter: null,
    name: null,
    active: false,
    param: null,
    is_seen: null
})


export default (state = new StructureState(), action)=>{
    const {type, response} = action; 
    switch(type){
        case LOAD_FILTERS:
        return state
        .update('filters',(filters) => filters.merge(objToMap(response.filters,MapFilter)))
        .update('checked',(checked) => checked.merge(objToList(response.checked)))
        .update('hide',(hide) => hide.merge(response.hide))

        case TOGGLE_FILTER:
        const {param} = action;
        return state
        .updateIn(['filters',param,'active'], (active) => !active)

        case HIDE_SHOW_FITLERS:
        const {flag} = action;
        const {hide} = state;
        if(flag){
            return state
            .updateIn(['filters'], item => 
                item.map(val => val.update('is_seen', v => hide.get(val['param']))))
        }else{
            return state
            .updateIn(['filters'], item =>
                item.map(val => !hide[val['param']] ? val.update('is_seen', v => true) : val))
        }
        default: 
            return state
    }
}