import {newStructure} from '../helper';
import defaultParams from '../data/default_params';
import tags from '../data/tags';

import {FETCH_BEGIN,
        FETCH_SUCCESS,
        FETCH_FAILURE,
        SORT_TARIFS,
        SET_FILTERS,
        SET_TAGS,
        } from '../constans';


export const callAPI = () => {
    return{
        meta:{
            type: "API",
            url: "../data/tarifs.json"
        }
    }
}    

export const filterAPI = () => {
    return{
        meta: {
            type: "API",
            set: SET_FILTERS,
            url: "../data/default_params.json"
        }
    }
}

export const tagsAPI = () => {
    return{
        meta:{
            type: "API",
            set: SET_TAGS,
            url: "../data/tags.json"
        }
    }
}
// export function fetchData() {
//     return function(dispatch) {
//       dispatch(fetchBegin());
//       return fetch("../data/tarifs.json")
//         .then(handleErrors)
//         .then(res => res.json())
//         .then(json => {
//             // const newStructureData = newStructure(json,defaultParams,tags) 
//             dispatch(fetchSuccess(json))
//             return json
//         })
//         .catch(error => dispatch(fetchFailure(error)))
//     };
//   }

// function handleErrors(res){
//     if(!res.ok){
//         throw Error(res.statusText)
//     }
//     return res;
// }

// export const fetchBegin =()=>({
//     type: FETCH_BEGIN
// })

// export const fetchSuccess=(data)=>({
//     type: FETCH_SUCCESS,
//     payload: data
// });

// export const fetchFailure=(error)=>({
//     type: FETCH_FAILURE,
//     payload: {error}
// })

