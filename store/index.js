import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import thunk from "redux-thunk";
import api from '../middleware/api';
import logger from '../middleware/logger';
import randomId from '../middleware/randomId';
import {fromJS} from 'immutable';
import persistState from 'redux-localstorage';
// import {composeEnhancers} from '../middleware/dev';   
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';

const enhancer = applyMiddleware(thunk, api, randomId);


const store = createStore(reducer, composeWithDevTools(enhancer))

// window.store = store;
export default store;

