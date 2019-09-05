import React,{Component} from 'react'
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import {increment} from '../action';

class Counter extends Component {
    render(){
        return(
            <div>
                <h3>{this.props.counter}</h3>
                <button onClick={this.props.HandleIncrement}>increment</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        counter: state.counter
    }
}

const mapDispatchToProps = {
    HandleIncrement: increment
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)