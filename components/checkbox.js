import React,{useState} from "react";
import PropTypes from 'prop-types';
import {get} from 'immutable';
import {connect} from 'react-redux';
import {createSelectorChecked} from '../selectors';

const Checkbox = (props) =>{
    const {values,hide,param,checked} = props; 
    // console.log(checked,"CHECKED")
    return(
       <React.Fragment>
           {
               values.map((item,index)=>{
                   return(
                    <React.Fragment key={index}>
                        <input 
                                 type="checkbox" className='checkbox' id={`${param}${index}`} 
                                // value={this.props.item}
                                  checked={checked[param].indexOf(item) >= 0 ? true : false}
                                  onChange={(e,obj)=>{console.log("!")}}
                                // onChange={toggleChecked}
                                />
                        <label htmlFor={`${param}${index}`} className={hide ? "hide" : ""}>
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

export default connect((state) =>({
    checked: createSelectorChecked(state)
}))(Checkbox)