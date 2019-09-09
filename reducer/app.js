export default(state = [], action)=>{
    const {type,payload} = action;
    switch(type){
        case "LOAD_DATA":
            return [...state, ...payload]
        default:
            return state;
    }
}