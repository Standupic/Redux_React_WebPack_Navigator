import 
    {FETCH_BEGIN,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    SET_FILTERS,
    SET_TAGS,
    } from '../constans';

export const API = store => next => action =>{
    if(!action.meta || action.meta.type !== "API"){
        return next(action)
    }
    const {url,set} = action.meta;
    store.dispatch(fetchBegin())
    fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
        switch(set){
            case SET_FILTERS:
                store.dispatch(setFilters(json))
            case SET_TAGS:
                store.dispatch(setTags(json))
            default:
        }
        store.dispatch(fetchSuccess(json))
        return json
    })
    .catch(error => store.dispatch(fetchFailure(error)));
}


const handleErrors = (res) =>{
    if(!res.ok){
        throw Error(res.statusText)
    }
    return res;
}

const fetchBegin = ()=>({
    type: FETCH_BEGIN
})

const fetchSuccess = (data)=>({
    type: FETCH_SUCCESS,
    payload: data
});

const fetchFailure = (error)=>({
    type: FETCH_FAILURE,
    payload: {error}
})

const setFilters = (data)=>({
    type: SET_FILTERS,
    payload: data
})

const setTags = (data)=>({
    type: SET_TAGS,
    payload: data
})