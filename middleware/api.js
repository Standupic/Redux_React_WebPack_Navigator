import "regenerator-runtime/runtime";
import {createFilters,greatestValue} from '../helper';

import 
    {FETCH_BEGIN,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    SET_FILTERS,
    SET_TAGS,
    } from '../constans';


export default (store) => (next) => async (action) =>{
    if(!action.meta || action.type !== "API"){
        return next(action)
    }
    const {meta} = action
    next({
        type: FETCH_BEGIN
    });

    try {
        const data = await doRequest(meta[0])
        next({
            type: FETCH_SUCCESS,
            payload: data
        })
        const defaultParams = await doRequest(meta[1])
        const filters  = await createFilters(defaultParams, data)
        next({
            type: SET_FILTERS,
            payload: filters
        })
        const tagsParams = await doRequest(meta[2])
        const tags = await greatestValue(tagsParams)
        next({
            type: SET_TAGS,
            payload: tags
        })
    }catch(error){
        next({
            type: FETCH_FAILURE,
            payload: {error}
        })
    };
}

const doRequest = async (url) =>{
    const params = await fetch(url);
    const data = await params.json();
    return data;
}