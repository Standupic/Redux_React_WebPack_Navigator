import React from "react";
import PropTypes from 'prop-types';
import Radio from "./radio";
import Checkbox from './checkbox';
import Slider from './slider';
import {connect} from 'react-redux';

import {
        handleToggleFilter,
        handlerFilteringCheckbox,
        handlerFilteringRadio,
        handlerSlider,
        handlerResetRadio
        } from '../action/filters';
import {createSelectorChecked,
        isFiltering,
        createSelectorSlider,
        createSelectorHideShowInputs} from "../selectors";

class Filter extends React.Component{

    state = {
        "checkbox": Checkbox,    
        "radio": Radio,
        "slider": Slider,
    }
    
    render(){
        const {param,
               name,
               active,
               filter,
               values,
               } = this.props.instance;
        const {
            handleToggleFilter,
            checked,
            slider,
            filtering,
            handlerFilteringCheckbox,
            handlerFilteringRadio,
            handlerSlider,
            handlerResetRadio,
            hideShowInputs
            } = this.props;

        const methodes = {
            "checkbox": {
                "handler": handlerFilteringCheckbox,
            },
            "radio": {
                "handler": handlerFilteringRadio,
                "reset": handlerResetRadio,
            },
            "slider": {
                "handler": handlerSlider,
                "value": slider,
            } 
        }
        
        let TypeFilter = this.state[filter]
        

        return(
            <React.Fragment>
                <div className={
                    active ? 
                    "an-navigator-filter util-open open-true" 
                    : 
                    "an-navigator-filter util-open"}> 
                    <div className="an-navigator-filter-header" onClick={()=>(handleToggleFilter(param))}>
                        <img src="../src/img/an-navigator-arrow-down.svg" className="an-navigator-arrow-up swallow"/>
                        <span className={`${filtering[param] && !active ? 
                        "an-navigator-filter-header-title filter-true"
                        : 
                        "an-navigator-filter-header-title"}`}>
                        {name}
                        </span>
                    </div>
                    <div className="scrollFilter">
                        <div className="option util-open-to-hide">
                            <TypeFilter 
                                values={values}
                                param={param}
                                hideShow={hideShowInputs}
                                checked={methodes[filter].value ? methodes[filter].value : checked}
                                methodes={methodes[filter]}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
		)
	}
}

Filter.propTypes = {
    filtering: PropTypes.object.isRequired,
    checked: PropTypes.object.isRequired,
    slider: PropTypes.object.isRequired,
    handleToggleFilter: PropTypes.func.isRequired,
    handlerFilteringCheckbox: PropTypes.func.isRequired,
    handlerSlider: PropTypes.func.isRequired,
    handlerResetRadio: PropTypes.func.isRequired
}

export default connect((state) =>({
    filtering: isFiltering(state),
    checked: createSelectorChecked(state),
    slider: createSelectorSlider(state),
    hideShowInputs: createSelectorHideShowInputs(state)
}),{handleToggleFilter,
    handlerFilteringCheckbox,
    handlerSlider,
    handlerResetRadio,
    handlerFilteringRadio})(Filter);


