import React from "react";
import {connect} from 'react-redux';
import {sortTarifs} from '../action/sortTarif';

class SorterFilter extends React.Component{

	componentDidMount(){
		const {anStyler} = this.refs;
		$(anStyler).styler({
			onSelectClosed: ()=>{
				this.props.sortTarifs(this.refs.anStyler.value)
			},
		});
	}

	render(){
		return(
			<React.Fragment>
				 <select className="an-styler" ref="anStyler">
				 	<option defaultValue>Сортировать:</option>
		            <option value="ACS">По цене/возрастание</option>
                    <option value="DES">По цене/убывание</option>
		        </select>
	        </React.Fragment>
		)
	}
	
}

 

export default connect(null,{sortTarifs})(SorterFilter);