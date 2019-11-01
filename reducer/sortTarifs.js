import {Record} from "immutable";
import {SORT_TARIFS} from '../constans';

const StructureState = new Record({
    isSort: false
})

export default(state = new StructureState(), action)=>{
    const {type,payload} = action;
    switch(type){
        default:
            return state;
    }
}