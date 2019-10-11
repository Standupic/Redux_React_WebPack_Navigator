import {combineReducers} from 'redux';
import data from './tarifs';
import sorting from './sortTarifs';
import filtering from './filtering';
import modal from './modal';
import pagination from './pagination';




const reducer = combineReducers({
    data,
    sorting,
    filtering,
    modal,
    pagination,
})

export default reducer;