import {Record,List} from "immutable";
import {SELECT_FILTER} from '../constans';

const StructureState = new Record({
    housetype: new List(),
    archive: new List()
})

export default(state = new StructureState(), action)=>{
    const {type,select} = action;
    switch(type){
        case SELECT_FILTER:
            return state
        default:
            return state;
    }
}