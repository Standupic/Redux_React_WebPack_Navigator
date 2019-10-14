import React from 'react';
import Checkbox from "./checkbox";
import Radio from "./radio";
// import Slider from './slider';

class InputList extends React.Component{
    render(){
        const {checked, type, param, values} = this.props 
        return(
            <div className="option util-open-to-hide">
                {
                    type == "checkbox" ?
                        values.map((elem, i) =>{
                            return(
                                <Checkbox 
                                    item={elem}
                                    checked={checked.indexOf(elem) >= 0 ? true : false}
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
                    : type == "radio" ?
                    <Radio 
                        item={values}
                        param={param}
                        checked={checked[0]}
                    />
                    : ""
                }
            </div>
        )
    }
}

export default InputList 
