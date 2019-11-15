import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderFilter from './headerFilter';
import TagList from './tagList';
import FilterList from './filterList';
import Tarif from './tarif';
import Modal from './modal';
import Pagination from './pagination';
import {callAPI}from '../action';


class App extends Component{
    componentDidMount(){
       const {callAPI} = this.props;
       callAPI()
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
                <section className="an-navigator-section-2">
			        <div className="an-navigator-wrap">
                         <TagList/>
                    </div>
                </section>
                <section className="an-navigator-section-3">
			        <div className="an-navigator-wrap">
                        <FilterList/>
                        {/* <Tarif/> */}
                    </div>
	    		</section>
                <section className="pagination">
	    			<Pagination/>
	    		</section>
                {/* {open ? 
                    <Modal/>
                :
                     null
                } */}
           </React.Fragment>
        )
    }
}


export default connect(null,{callAPI})(App)