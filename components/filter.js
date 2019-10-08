import React from "react";
import PropTypes from 'prop-types';
import InputList from "./inputList";

class Filter extends React.Component{
  state = {
        toggle: false
    }
  render(){
    const {item} = this.props;
    const {filter, param, checked, name} = item;
	return(
		<React.Fragment>
        <div>
            <div className={this.state.toggle ? "an-navigator-filter util-open open-true" : "an-navigator-filter util-open"}> 
            <div className="an-navigator-filter-header" onClick={(name)=>{handleToggleFilter(param)}}>
                <img src="/img/an-navigator-arrow-down.svg" className="an-navigator-arrow-up swallow"/>
                <span className="an-navigator-filter-header-title">
                {name}
                </span>
            </div>
            <div className="scrollFilter">
                <InputList 
                    type={filter}
                    values={item[item['param']]}
                    checked={checked}
                    param={param}
                />
            </div>
        </div>
      </div>
    </React.Fragment>
		)
	}
}

Filter.getDerivedStateFromProps=(props)=>{
   const {active} = props.item;
    return{
        toggle: active,
    }
}

// Filter.propTypes = {
//     obj: PropTypes.object.isRequired,
//     tag: PropTypes.object.isRequired
// }

export default Filter;