import React,{useState} from "react";
import PropTypes from 'prop-types';


const Checkbox = (props) =>{
    const {values,hide,param,checked,
            methodes} = props;
    const {handler} = methodes;
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
                                  onChange={(obj)=>{
                                      handler({'param':param,'value':item})}
                                  }
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

export default Checkbox