import React,{useState} from "react";
import PropTypes from 'prop-types';

const Checkbox = (props) =>{
    // const [checked, toggleChecked] = useState(false)
    const {values,hide} = props; // values через родительский компонент 
    //checked через connect store 
    // const activeChecked = checked[param] ? checked[param] : [] 
    console.log("Checkbox")
    return(
       <React.Fragment>
           {
               values.map((item,index)=>{
                   return(
                    <React.Fragment key={index}>
                        <input 
                                data-id={`c${index}`} type="checkbox" className='checkbox' id={`c${index}`} 
                                // value={this.props.item}
                                // checked={toggleChecked} checked={activeChecked.indexOf(item) >= 0 ? true : false}
                                // onChange={(e,obj)=>{console.log("!")}}
                                // onChange={toggleChecked}
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