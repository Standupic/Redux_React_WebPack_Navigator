import {Record} from 'immutable';
import {SEARCH} from '../constans';


const Search = new Record({
    search: ""
})

export default (state = new Search(), action) => {
    const {type,str} = action;
    switch(type){
        case SEARCH:
            return state
            .update('search', item => str)
        break;
        default:
        return state
    }
}