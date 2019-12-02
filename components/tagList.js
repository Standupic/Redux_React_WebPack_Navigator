import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loader from './loader';
import {handlerTagsSearch,
        handlerDeleteTag} from '../action/tags';
import { createSelectorTags } from "../selectors/";


const FilterTagList = (props) =>{
    const {tags,handlerTagsSearch,handlerDeleteTag} = props;
    return(
        <div className="an-navigator-section-2-tags">
            {!tags ? 
                <Loader/>
            :
            tags.map((item,index)=>{
                return(
                    <React.Fragment key={item.id}>
                        <div className="an-navigator-section-2-tag" 
                            onClick={(obj)=>{handlerTagsSearch(item.value)}}>
                            {item.title}
                        </div>
                        <span onClick={(id)=>{handlerDeleteTag(index)}}>&times;</span>
                    </React.Fragment>
                )
            })
            }
        </div>
    )
}



FilterTagList.propTypes = {
  tags: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  handlerTagsSearch: PropTypes.func.isRequired,
  handlerDeleteTag: PropTypes.func.isRequired
}

export default connect((state)=>({
    tags: createSelectorTags(state),
    loading: state.data.loading
}),{handlerTagsSearch,
    handlerDeleteTag})(FilterTagList);
