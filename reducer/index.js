import {combineReducers} from 'redux';
import data from './data';
import sort from './sortTarifs';
import filters from './filters';
import modal from './modal';
import pagination from './pagination';


const reducer = combineReducers({
    data,
    sort,
    filters,
    modal,
    pagination,
})

export default reducer;