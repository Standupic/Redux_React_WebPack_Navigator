import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from '../store';
import App from '../components/app';
import './style.css'
require("./jquery.formstyler.js");

ReactDOM.render(
    <Provider store={store}>
       <App /> 
    </Provider>, 
document.querySelector("#root"));