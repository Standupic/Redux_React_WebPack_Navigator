import {
    FETCH_BEGIN,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    } from '../constans';


const initialState = {
    data:[],
}

export default(state = initialState, action)=>{
    const {type,payload} = action;
    switch(type){
        case FETCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                data: state.data.concat(payload),
                loading: false
            }
        case FETCH_FAILURE:
            return{
                ...state,
                loading: false,
                error: payload.error,
            }
        default:
            return state;
    }
}