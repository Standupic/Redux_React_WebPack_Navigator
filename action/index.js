import {newStructure} from '../helper';
import defaultParams from '../data/default_params';
import tags from '../data/tags';
import {FETCH_BEGIN,
        FETCH_SUCCESS,
        FETCH_FAILURE,
        SORT_TARIFS
        } from '../constans';


export function fetchData() {
    return function(dispatch) {
      dispatch(fetchBegin());
      return fetch("../data/tarifs.json")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            const newStructureData = newStructure(json,defaultParams,tags) 
            dispatch(fetchSuccess(newStructureData))
            return json
        })
        .catch(error => dispatch(fetchFailure(error)))
    };
  }

function handleErrors(res){
    if(!res.ok){
        throw Error(res.statusText)
    }
    return res;
}

export const fetchBegin =()=>({
    type: FETCH_BEGIN
})

export const fetchSuccess=(data)=>({
    type: FETCH_SUCCESS,
    payload: data
});

export const fetchFailure=(error)=>({
    type: FETCH_FAILURE,
    payload: {error}
})

export const sortTarifs =(str)=>{
    console.log(str)
    return{
        type: SORT_TARIFS,
        payload: str
    }
}
