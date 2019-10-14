import React from "react";
import PropTypes from 'prop-types';
import { throws } from "assert";

class Radio extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         checked: ""
    //     }
    // }
	// state = {
	// 	checked: ""
	// }

	// onChange=(e,obj)=>{
	// 	this.props.onChange(e,obj)
	// 	this.toggleChecked(e)
	// }
	// componentDidMount(){
	// 	if(this.props.checked){
	// 		this.setState({
	// 			checked: true
	// 		})
	// 	}
	// }	
	// toggleChecked=(e)=>{
	// 	this.setState({
	// 		checked: e.target.value
	// 	})
	// }
	render(){
		const radio = this.props.item
		const name = this.props.param
		const checked = this.props.checked
		return(
			 <div className="radio-group parser_main_pakets">
			 	 {radio.map((item,key)=>{
			 	 	return(
			 	 		<React.Fragment key={key}>
			 				<input 	name={`${name}-${key}`} type="radio" id={`${name}-${key}`}
			 						value={item}
							 		onChange={(e)=>{this.onChange(e,{value:{[name]:item}})}}
							 		checked={checked === item}/>
						     <label htmlFor={`${name}-${key}`}><span className="out-dot"><div className="in-dot"></div></span>{item}<b></b></label>
						</React.Fragment>
			 	 		)
				  })}
				  <p className="resetRadio" onClick={(obj)=>{this.props.resetRadio(name)}}>Сбросить</p>
		    </div>
		)
	}
}

// Radio.getDerivedStateFromProps=(props)=>{
// 	const {checked} = props;
// 		if(checked){
// 			return{
// 				checked: checked
// 		}
// 	}
// }

// Radio.propTypes = {
// 	item: PropTypes.array.isRequired,
// 	name: PropTypes.string.isRequired,
// 	onChange: PropTypes.func.isRequired,
// }

export default Radio;