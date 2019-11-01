import {LOAD_TAGS} from '../constans';
import {Record, OrderedMap} from 'immutable';
import {arrToRecord,arrToMap} from './utils';

const StructureState = new Record({
    tags: arrToMap([],MapTag)
})

const MapTag = new Record({
    value: {},
    title: null,
    position: null
})


export default (state = new StructureState(), action) =>{
    const {type, response} = action;
    switch(type){
        case LOAD_TAGS:
        return state
        .update('tags',(tags) => arrToMap(response.tags,MapTag).merge(tags))

    }
    return state
}