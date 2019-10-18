import React,{PureComponent} from "react";
import PropTypes from 'prop-types';

class Checkbox extends PureComponent{


// onChange=(e,obj)=>{
//     this.props.onChange(e,obj)
// }

// callbackTag=(val,name)=>{
//     if(this.props.callbackTag){
//         this.props.callbackTag(val,name)
//     }
// }

render(){
    console.log("checkbox")
    const {item,name,index,hide} = this.props;
    return(
            <React.Fragment>
                <input 
                    data-id={`c${index}`} type="checkbox" className='checkbox' id={`c${index}`} 
                    // value={this.props.item}
                    checked={this.props.checked}
                    onChange={(e,obj)=>{console.log("!")}}
                />
                <label htmlFor={`c${index}`} className={hide ? "hide" : ""}>
                    <span>{item}</span>
                </label>
			</React.Fragment>
		)
	}
}

// Checkbox.propTypes = {
// 	item: PropTypes.object.isRequired,
// 	name: PropTypes.string.isRequired,
// 	index: PropTypes.number.isRequired,
// }

export default Checkbox;