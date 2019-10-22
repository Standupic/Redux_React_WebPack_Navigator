import React,{Component} from "react";
import PropTypes from 'prop-types';

const Checkbox = (props) =>{
    const {values,checked,hide} = props;
    return(
       <React.Fragment>
           {
               values.map((item,index)=>{
                   return(
                    <React.Fragment>
                        <input 
                                data-id={`c${index}`} type="checkbox" className='checkbox' id={`c${index}`} 
                                // value={this.props.item}
                                checked={checked}
                                onChange={(e,obj)=>{console.log("!")}}
                                />
                        <label htmlFor={`c${index}`} className={hide ? "hide" : ""}>
                                <span>{item}</span>
                        </label>
                    </React.Fragment>
                   )
               })
           }
       </React.Fragment>
     )
}

// Checkbox.propTypes = {
// 	item: PropTypes.object.isRequired,
// 	name: PropTypes.string.isRequired,
// 	index: PropTypes.number.isRequired,
// }

export default Checkbox;