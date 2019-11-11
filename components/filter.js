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
        createSelectorSlider} from "../selectors";

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
            handlerFilteringCheckbox,
            handlerFilteringRadio,
            handlerSlider
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
                <div className={active ? "an-navigator-filter util-open open-true" : "an-navigator-filter util-open"}> 
                    <div className="an-navigator-filter-header" onClick={()=>(handleToggleFilter(param))}>
                        <img src="../dist/img/an-navigator-arrow-down.svg" className="an-navigator-arrow-up swallow"/>
                        <span className="an-navigator-filter-header-title">
                        {name}
                        </span>
                    </div>
                    <div className="scrollFilter">
                        <div className="option util-open-to-hide">
                            <TypeFilter 
                                values={values}
                                param={param}
                                name={name}
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

// Filter.propTypes = {
//     obj: PropTypes.object.isRequired,
//     tag: PropTypes.object.isRequired
// }

export default connect((state) =>({
    checked: createSelectorChecked(state),
    slider: createSelectorSlider(state)
}),{handleToggleFilter,
    handlerFilteringCheckbox,
    handlerSlider,
    handlerFilteringRadio})(Filter);