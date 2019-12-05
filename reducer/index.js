import {combineReducers} from 'redux';
import data from './data';
import filters from './filters';
import search from './search';
import sort from './sort';
import tags from './tags';
import modal from './modal';
import pagination from './pagination';


const reducer = combineReducers({
    data,
    filters,
    search,
    tags,
    sort,
    modal,
    pagination,
})

export default reducer;