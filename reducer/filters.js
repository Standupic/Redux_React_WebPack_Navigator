import {
    LOAD_FILTERS,
    TOGGLE_FILTER,
    HIDE_SHOW_FITLERS,
    RESET_FILTERS,
    HANDLER_FILTERING_CHECKBOX,
    HANDLER_FILTERING_RADIO,
    HANDLER_SLIDER,
    TAG_SEARCH,
    RESET_RADIO,
    SELECT_FILTER
} from '../constans';
import {Record, OrderedMap, List, toJS, clear} from 'immutable';
import {objToMap,objToList} from './utils';


const StructureState = Record({
    filters: new OrderedMap({}),
    checked: new OrderedMap({}),
    hide: new OrderedMap({}),
    slider: new OrderedMap({}),
    select: new OrderedMap({
        housetype: new List(),
        archive: new List()
    })
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
        .update('filters', (filters) => filters.merge(objToMap(response.filters, MapFilter)))
        .update('checked', (checked) => checked.merge(objToList(response.checked)))
        .update('hide', (hide) => hide.merge(response.hide))
        .update('slider', (slider) => slider.merge(objToList(response.slider)))
        break;

        case TOGGLE_FILTER:
        const {param} = action;
        return state
        .updateIn(['filters',param,'active'], (active) => !active)
        break;
        case TAG_SEARCH:
        const {tag} = action;
            return state
            .updateIn(['checked'], item => 
                item.map(val => val.clear()))
            .updateIn(['checked'], 
                item => item.merge(objToList(tag)))
            .updateIn(['filters'], 
                item => item.map((val, key) =>
                tag[key] ? val.update('active',v => true) : val.update('active', v => false)
            ))
        break;

        case HIDE_SHOW_FITLERS:
        const {flag} = action;
        const {hide} = state;
        switch(flag){
            case true:
            return state
            .updateIn(['filters'], item => 
                item.map(val => val.update('is_seen', v => hide.get(val['param']))))
            break;
            case false:
            return state
            .updateIn(['filters'], item =>
                item.map(val => !hide[val['param']] ?
                val.update('is_seen', v => true) 
                : 
                val))
            break;
        }
        break;
        case RESET_FILTERS:
            return state
            .updateIn(['checked'], item => 
                item.map(val => val.clear()))
            .updateIn(['slider'], item => 
                item.map(val => val.clear()))
            .updateIn(['filters'], item => 
                item.map(val => val.update('active', v => false)))
        break;
        case HANDLER_FILTERING_RADIO:
        const {radio} = action;
            return state
            .updateIn(['checked', radio.param], item => List([radio.value]))
        break;
        case RESET_RADIO:
            return state
            .updateIn(['checked', action.param], item => item.clear())
        break;
        case HANDLER_FILTERING_CHECKBOX:
        const {checkbox} = action;
            return state
            .updateIn(['checked', checkbox.param], item =>
             item.indexOf(checkbox.value) >= 0 ?
             item.delete(item.indexOf(checkbox.value))
             :
             item.push(checkbox.value))
        break;
        case SELECT_FILTER: 
        const {select} = action
            return state
            .updateIn(['select', select.param], item => (select.value === "Любой" || select.value === "")
            ? 
            List()
            :
            List([select.value]));
        break;
        case HANDLER_SLIDER:
        const {slider} = action;
            return state
            .updateIn(['slider', slider.param], item => List(slider.value))
        break;
        default:
            return state
    }
}