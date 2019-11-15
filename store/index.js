import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import thunk from "redux-thunk";
import api from '../middleware/api';
import logger from '../middleware/logger';
import randomId from '../middleware/randomId';
import {composeEnhancers} from '../middleware/dev';

const enhancer = composeEnhancers(applyMiddleware(thunk, api, randomId, logger))

const store = createStore(reducer, enhancer);

window.store = store;
export default store;


