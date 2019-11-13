import {LOAD_TAGS,
        SET_TAG} from '../constans';
import {Record, OrderedMap} from 'immutable';
import {arrToRecord,arrToMap} from './utils';
import {pushElem} from '../helper';

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
        break;
        case SET_TAG:
        const {newTag} = action
        console.log(pushElem(state.tags,newTag))
        return state
        .update('tags', tags => arrToMap(pushElem(state.tags,newTag),MapTag))
        break;

    }
    return state
}