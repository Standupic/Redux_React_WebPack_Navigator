import {Record,updateIn} from "immutable";
import {SORT_TARIFS} from '../constans';

const StructureState = new Record({
    isSort: false
})

export default(state = new StructureState(), action)=>{
    const {type,payload} = action;
    switch(type){
        case SORT_TARIFS:
            return state.
            updateIn(['isSort'], v => payload == "Сортировать:" ? false : payload)
        default:
            return state;
    }
}