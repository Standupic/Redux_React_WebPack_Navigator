import {combineReducers} from 'redux';
import data from './tarifs';
import sorting from './sortTarifs';
import filtering from './filtering';
import tarifId from './tarifId';
import pagination from './pagination';




const reducer = combineReducers({
    data,
    sorting,
    filtering,
    tarifId,
    pagination,
})

export default reducer;