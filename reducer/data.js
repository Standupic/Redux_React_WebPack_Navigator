import {
    LOAD_DATA,
    LOAD_DATA_BEGIN,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
    HIDE_SHOW
    } from '../constans';

import {Record, OrderedMap} from 'immutable';
import {objToMap,arrToMap} from './utils';

const StructureState = new Record({
    labels: new OrderedMap({}),
    hideShowData: new OrderedMap({}),
    data: [],
    error: null,
    loading: false
})

const MapHideShowData = new Record({
    param: null,
    name: null,
    read_more: null
})

export default(state = new StructureState(), action)=>{
    const {type, response} = action;
    switch(type){
        case LOAD_DATA_BEGIN:
            return state.set('loading', true)
        case LOAD_DATA:
            return state
            .update('data',(data) => data.concat(response.data))
            .update('labels',(labels) => labels.merge(response.labels))
            .update('hideShowData', (hideShow) => hideShow.merge(objToMap(response.hideShowData,MapHideShowData)))
            .set('loading', false)
        case LOAD_DATA_SUCCESS:
             return state
             .set('loading', false)
        case LOAD_DATA_FAILURE:
            return state
            .set('error', response.error)
        case HIDE_SHOW:
            const {param,read_more} = action;
            return state
            .updateIn(['hideShowData',param,'read_more'], (item) => read_more)
        default:
            return state;
    }
}