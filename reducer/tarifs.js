import {FETCH_BEGIN,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    } from '../constans';

const initialState = {
    data:[],
    filters: [],
    hideShowData: [],
    checkboxHideShow: [],
    greatestValue: [],
    labels: [],
    loading: false,
    error: null
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
            const { filters,
                    hideShowData,
                    checkboxHideShow,
                    greatestValue,
                    labels,
                    data
                } = payload;
            return{
                ...state,
                loading: false,
                data: data,
                filters: filters,
                hideShowData: hideShowData,
                checkboxHideShow: checkboxHideShow,
                labels: labels,
                greatestValue: greatestValue
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