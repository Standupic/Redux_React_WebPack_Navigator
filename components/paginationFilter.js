import React from "react";

class PaginationFilter extends React.Component{

	componentDidMount(){
		const {anStyler2} = this.refs;
		$(anStyler2).styler({
			// onSelectClosed: ()=>{
			// 	this.onChange(this.refs.anStyler2.value)
			// },
		});
	}

	// onChange=(select)=>{
	// 	this.props.handlePaginationCountTarifs(select)
	// }
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

export default PaginationFilter;