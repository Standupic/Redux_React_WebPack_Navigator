import React from "react";
import {connect} from 'react-redux';
import {sortTarifs} from '../action/sort';
import {sortingTarifs} from '../selectors';

import {
	ACS,
	DES,
	TYPE_SUGGESTION_A_Я,
	TYPE_SUGGESTION_Я_A
    } from '../constans'



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
		            <option value={ACS}>По цене/возрастание</option>
                    <option value={DES}>По цене/убывание</option>
					<option value={TYPE_SUGGESTION_A_Я}>Тип предложения/A-Я</option>
					<option value={TYPE_SUGGESTION_Я_A}>Тип предложения/Я-A</option>
		        </select>
	        </React.Fragment>
		)
	}
	
}

 

export default connect((state) => ({
    data: sortingTarifs(state)
})
,{sortTarifs})(SorterFilter);