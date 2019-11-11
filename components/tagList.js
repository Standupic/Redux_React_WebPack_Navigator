import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loader from './loader';
import {toArray} from 'immutable';
import {handlerTagsSearch} from '../action/tags';
import { createSelectorTags } from "../selectors/";


class FilterTagList extends React.Component{
  
//   shouldComponentUpdate(newProps, newState){
//     return this.props.greatestValue != newProps.greatestValue
//   }

  
	render(){
        const {tags,handlerTagsSearch} = this.props;
		return(
			<div className="an-navigator-section-2-tags">
              {!tags ? 
                    <Loader/>
              :
               tags.map((item,key)=>{
                    return(
                        <React.Fragment key={key}>
                        <div className="an-navigator-section-2-tag" 
                             onClick={(obj)=>{handlerTagsSearch(item.value)}}>
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
    tags: createSelectorTags(state),
    loading: state.data.loading
}),{handlerTagsSearch})(FilterTagList);
