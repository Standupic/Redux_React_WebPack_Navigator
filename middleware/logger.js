export default (store) => (next) => (action) =>{
    console.log(action, "action is run")
    next(action)
    console.log(store.getState(), "store after dispatch is run")
}