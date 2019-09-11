import {combineReducers} from 'redux';
import data from './tarifs';
import sorting from './sortTarifs';

const reducer = combineReducers({
    data,
    sorting
})

export default reducer;