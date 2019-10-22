import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderFilter from './headerFilter';
import FilterTagList from './filterTagList';
import FilterList from './filterList';
import Tarif from './tarif';
import Modal from './modal';
import DecoratorToggleOpen from './decorators/toggleOpen';
import Pagination from './pagination';
import {callAPI,
        filterAPI,
        tagsAPI} from '../action';
import {filterData} from '../action/filters';


class App extends Component{
    componentDidMount(){
        this.props.dispatch(callAPI())
        this.props.dispatch(filterAPI())
        this.props.dispatch(tagsAPI())
    }
    render(){
        const {modal} = this.props
        const {id, open} = modal
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
                        {/* <Tarif/> */}
                    </div>
	    		</section>
                {/* <section className="pagination">
	    			<Pagination/>
	    		</section>
                {open ? 
                    <Modal/>
                :
                     null
                } */}
           </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
   return {
       loading: state.data.loading,
       modal: state.modal
   }
}

export default connect(mapStateToProps)(DecoratorToggleOpen(App))