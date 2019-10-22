import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loader from './loader';
// import {performerFiltering} from '../action/filters';
// import { changeFilters } from "../selectors/";


class FilterTagList extends React.Component{
  
//   shouldComponentUpdate(newProps, newState){
//     return this.props.greatestValue != newProps.greatestValue
//   }

  
	render(){
        const {tags} = this.props;
		return(
			<div className="an-navigator-section-2-tags">
              {!tags ? 
                    <Loader/>
              :
               tags.map((item,key)=>{
                    return(
                        <React.Fragment key={key}>
                        <div className="an-navigator-section-2-tag" 
                             onClick={(obj)=>{performerFiltering(item.value)}}>
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

export default connect((state)=>({
    tags: state.tags.tags,
    loading: state.data.loading
}))(FilterTagList);
