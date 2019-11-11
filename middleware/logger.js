import {toJS, fromJS} from "immutable"
import { isImmutable } from "immutable"

export default (store) => (next) => (action) =>{
    console.log(action, "action is run")
    next(action)
    console.log(fromJS(store.getState()).toJS(), "store after dispatch is run")
}