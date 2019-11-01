import {HIDE_MODAL,SHOW_MODAL} from '../constans';
import {OrderedMap} from 'immutable';

const initialState = new OrderedMap({
    id: false,
    open: false
})

export default (state = initialState, action)=>{
    const {type} = action
    switch(type){
        case HIDE_MODAL:
            return state
            .update('open', (open) => false)
            .update('id', (id) => false) 
            
        case SHOW_MODAL:
            return state
            .update('open', (open) => action.open)
            .update('id', (id) => action.id) 
        default:
            return state;
    }
}