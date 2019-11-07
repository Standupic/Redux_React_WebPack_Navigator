import {combineReducers} from 'redux';
import data from './data';
import filters from './filters';
import sort from './sortTarifs';
import tags from './tags';
import modal from './modal';
import pagination from './pagination';

const reducer = combineReducers({
    data,
    filters,
    tags,
    sort,
    modal,
    pagination,
})

export default reducer;