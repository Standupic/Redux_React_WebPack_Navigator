export default(state={},action)=>{
    const {type, payload} = action;
    switch(type){
        case "LOAD_DATA":
            return {payload}
        default:
            return state;
    }
}