import React from "react";
import {connect} from 'react-redux';
import {setQuantityTarifs} from '../action/pagination';

class QuantityDisplayTarifs extends React.Component{
	componentDidMount(){
        const {anStyler2} = this.refs;
        const {setQuantityTarifs} = this.props;
		$(anStyler2).styler({
			onSelectClosed: ()=>{
                setQuantityTarifs(this.refs.anStyler2.value)
			},
		});
	}
	render(){
		return(
			 <select className="an-styler" ref="anStyler2">
			 		<option defaultValue>Кол-во отобр. стр.</option>
		            <option>8</option>
		            <option>18</option>
		            <option>24</option>
                    <option>48</option>
		     </select>
		)
	}
	
}

export default connect(
    null,
    {setQuantityTarifs})(QuantityDisplayTarifs);