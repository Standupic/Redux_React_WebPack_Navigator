import React,{useState} from "react";
import PropTypes from 'prop-types';
import {isObjectOrArray} from '../helper';

const Checkbox = (props) =>{
    const {values,hideShow,param,checked,
            methodes} = props;
    const inputs = hideShow[param] ? hideShow[param] : values
    const {handler} = methodes;
    return(
       <React.Fragment>
           {
               inputs.map((item,index)=>{
                   return(
                    <React.Fragment key={index}>
                        <input 
                            type="checkbox" className='checkbox' id={`${param}${index}`} 
                            checked={checked[param].indexOf(item) >= 0 ? true : false}
                            onChange={(obj)=>{
                                handler({'param':param,'value':item})}
                            }
                        />
                        <label htmlFor={`${param}${index}`} 
                                className={""}>
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

export default Checkbox