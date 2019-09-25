import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import HeaderFilter from './headerFilter';
import FilterTagList from './filterTagList';
import FilterList from './filterList';
import Tarif from './tarif';
import Pagination from './pagination';
import {fetchData} from '../action';
import Loader from './loader';

class App extends Component{
    componentDidMount(){
        this.props.dispatch(fetchData("../data/tarifs.json"))
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
                            <FilterTagList/>
                    </div>
                </section>
                <section className="an-navigator-section-3">
			        <div className="an-navigator-wrap">
                        <FilterList/>
                        <Tarif/>
                    </div>
	    		</section>
                <section className="pagination">
	    			<Pagination/>
	    		</section>
           </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
   return {
       tarifs: state.tarifs,
       loading: state.loading,
       error: state.error
   }
}

export default connect(mapStateToProps)(App)