import React from "react";
import PropTypes from 'prop-types';
import Filter from './filter';
import {connect} from 'react-redux';
import Loader from './loader';
import Buttons from './buttons';

import {
        createSelectorFilters,
        loadingSelector,
      }
        from '../selectors';


const FilterList = (props) => {
    const {filters,loading} = props;
		return(
            <div className="an-navigator-filters">
                {
                    loading ? 
                        <Loader />
                    :
                    filters.map((record,index)=>{
                        return(
                            <Filter 
                                instance={record}
                                key={index}
                            />
                        )
                        
                    })
                }
                <Buttons
                    loading={loading}
                />
            </div>
		)
	}
// FilterList.propTypes = {
	
// }

export default connect((state)=> ({
    filters: createSelectorFilters(state),
    loading: loadingSelector(state)
}))(FilterList);