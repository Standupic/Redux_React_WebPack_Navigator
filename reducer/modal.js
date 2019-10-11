import {HIDE_MODAL,SHOW_MODAL} from '../constans';

const initialState = {
    id: false,
    open: false
}

export default (state = initialState, action)=>{
    const {type,open,id} = action
    switch(type){
        case HIDE_MODAL:
            return {
                ...state,
                open: false,
                id: false
            }
        case SHOW_MODAL:
            return {
                ...state,
                open: open,
                id: id 
            }
        default:
            return state;
    }
}