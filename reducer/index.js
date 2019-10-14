import {combineReducers} from 'redux';
import data from './tarifs';
import sort from './sortTarifs';
import filtering from './filtering';
import modal from './modal';
import pagination from './pagination';




const reducer = combineReducers({
    data,
    sort,
    filtering,
    modal,
    pagination,
})

export default reducer;