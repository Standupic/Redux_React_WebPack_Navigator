import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';

export default class App extends Component{
    render(){
        return(
           <React.Fragment>
               <Counter/>
           </React.Fragment>
        )
    }
}
