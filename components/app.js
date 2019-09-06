import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Counter from './counter';
import HeaderFilter from './headerFilter';
import {fetchData} from '../action';


class App extends Component{
    componentDidMount(){
        this.props.fetchData()
    }
    render(){
        return(
           <React.Fragment>
                <section className="an-setting-quickly-tags"></section>
				    <section className="an-navigator-section-2">
	       			    <div className="an-navigator-wrap">
                            <HeaderFilter/>
                        </div>
                    </section>
           </React.Fragment>
        )
    }
}

const mapStateToProps = (data) => {
    data
}
export default connect(mapStateToProps,{fetchData})(App)