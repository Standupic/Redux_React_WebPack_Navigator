import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loader from './loader';

class FilterTagList extends React.Component{
  
//   componentDidMount(){
    // this.props.dispatch(fetchData("../data/tags.json"))
//   }
  shouldComponentUpdate(newProps, newState){
    return this.props.greatestValue != newProps.greatestValue
  }

 
	render(){
        const {greatestValue,loading} = this.props;
		return(
			<div className="an-navigator-section-2-tags">
              {loading ? 
                    <Loader/>
              :
               greatestValue.map((item,key)=>{
                    return(
                        <React.Fragment key={key}>
                        <div className="an-navigator-section-2-tag">
                            {item.title}</div>
                            <span>&times;</span>
                        </React.Fragment>
                    )
                })
              }
             
        
              

            </div>
		)
	}
}


// FilterTagList.propTypes = {
//   greatestValue: PropTypes.array.isRequired,
//   deleteTag: PropTypes.func.isRequired,
//   handleTag: PropTypes.func.isRequired
// }

export default connect((state)=>{
    // console.log(state.data.tarifs.greatestValue, "state")
    return{
        greatestValue: state.data.greatestValue,
        loading: state.data.loading
    }
})(FilterTagList);
