import {LOAD_TAGS,
        SET_TAG,
        DELETE_TAG} from '../constans';
import {Record, deleteIn} from 'immutable';
import {arrToRecord} from './utils';
import {pushElem} from '../helper';

const StructureState = new Record({
    tags: []
})

const MapTag = new Record({
    value: {},
    title: null,
    position: null,
    id: null
})


export default (state = new StructureState(), action) =>{
    const {type, response} = action;
    switch(type){
        case LOAD_TAGS:
            return state
            .update('tags',(tags) => arrToRecord(response.tags,MapTag))
        break;
        case SET_TAG:
            const {newTag} = action 
            return state
            .update('tags', tags => pushElem(state.tags,newTag))
        break;
        case DELETE_TAG:
            return state
            .deleteIn(['tags', action.id])
        break;

    }
    return state
}