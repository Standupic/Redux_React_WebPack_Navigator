import React from "react";

class sorterFilter extends React.Component{

	componentDidMount(){
		const {anStyler} = this.refs;
		$(anStyler).styler({
			// onSelectClosed: ()=>{
			// 	this.onChange(this.refs.anStyler.value)
			// },
		});
	}

	// onChange=(select)=>{
	// 	// const {data} = this.props;
	// 	switch(select){
	// 		case "По цене/возрастание":
	// 			var sortData = data.sort((a,b)=>{
    //                 return a.onetimepayment - b.onetimepayment
	// 			})
	// 			this.props.handleSort(sortData)
    //         break
    //         case "По цене/убывание":
	// 			var sortData = data.sort((a,b)=>{
	// 				if(a.onetimepayment > b.onetimepayment) return -1;
	// 				if(a.onetimepayment < b.onetimepayment) return 1;
	// 			})
	// 			this.props.handleSort(sortData)
	// 		break
	// 	}
	// }

	render(){
		return(
			<React.Fragment>
				 <select className="an-styler" ref="anStyler">
				 	<option defaultValue>Сортировать:</option>
		            <option>По цене/возрастание</option>
                    <option>По цене/убывание</option>
		        </select>
	        </React.Fragment>
		)
	}
	
}

export default sorterFilter;