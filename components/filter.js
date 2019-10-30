import React from "react";
import PropTypes from 'prop-types';
import InputList from "./inputList";
import {connect} from 'react-redux';



class Filter extends React.Component{
    state = {
        toggle: false 
    } // Напиши все фильтры какие могу быть как Input list 
  handleToggleFilter(){
      this.props.dispatch({
          type: "ACTIVE"
      })
  }
  render(){
    // console.log("Filter")
    const {param,name,active} = this.props.item;
    console.log("FILTER")
	return(
		<React.Fragment>
        <div>
            <div className={active ? "an-navigator-filter util-open open-true" : "an-navigator-filter util-open"}> 
            <div className="an-navigator-filter-header" onClick={(name)=>{this.handleToggleFilter(param)}}>
                <img src="/img/an-navigator-arrow-down.svg" className="an-navigator-arrow-up swallow"/>
                <span className="an-navigator-filter-header-title">
                {name}
                </span>
            </div>
            <div className="scrollFilter">
                <InputList item = {this.props.item}
                />
            </div>
        </div>
      </div>
    </React.Fragment>
		)
	}
}

Filter.getDerivedStateFromProps=(props)=>{ // There is no point !! You set toggole from props. If you want open filters from component 
    // you need change state from store!!! 
   const {active} = props.item;
    return{
        toggle: active,
    }
}

// Filter.propTypes = {
//     obj: PropTypes.object.isRequired,
//     tag: PropTypes.object.isRequired
// }

export default connect()(Filter);