import {combineReducers} from 'redux';
import data from './tarifs';
import sorting from './sortTarifs';
import filtering from './filtering';
import pagination from './pagination';



const reducer = combineReducers({
    data,
    sorting,
    filtering,
    pagination
})

export default reducer;