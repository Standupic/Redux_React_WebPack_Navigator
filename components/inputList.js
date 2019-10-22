import React from 'react';
import Checkbox from "./checkbox";
import Radio from "./radio";
import filters from '../reducer/filters';
// import Slider from './slider';

class InputList extends React.Component{
    state = {
        checkbox: Checkbox,
        radio: Radio
    }
    render(){
        const {values, filter, param, checked} = this.props.item
        let Inputs = this.state['checkbox'];
        // console.log(this.state['checkbox'])

        return(
            <div className="option util-open-to-hide">
                <Inputs
                    values={values} 
                    checked={checked}
                    hide={false}
                    />
                {/* {
                    filter == "checkbox" ?
                        values.map((elem, i) =>{
                            return(
                                <Checkbox 
                                    item={elem}
                                    checked={values.indexOf(elem) >= 0 ? true : false}
                                    key={i}
                                    index={`${param+i}`}
                                    name={param}
                                /> 
                            )
                        })
                    // : type == "slider" ? 
                    // <Slider
                    //     item={values}
                    //     param={param}
                    // />
                    : filter == "radio" ?
                    <Radio 
                        item={values}
                        param={param}
                        checked={checked[0]}
                    />
                    : ""
                } */}
            </div>
        )
    }
}

export default InputList 
