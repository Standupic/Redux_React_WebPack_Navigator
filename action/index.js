import axios from "axios";
export const increment=()=>({
   type: "INCREMENT"
})

export function fetchData() {
    return function(dispatch) {
      return axios.get("../data/tarifs.json")
        .then(({ data }) => {
        dispatch(setData(data));
      });
    };
  }

export const setData=(data)=>{
    console.log(data)
    return {
      type: "LOAD_DATA",
      payload: data
    };
 }