import React from "react";
import PropTypes from 'prop-types';
import Filter from './filter';
import {connect} from 'react-redux';
import SetTagSearch from './setTagSearch';
import Loader from './loader';
import {createSelectorFilters,loadingSelector} from '../selectors';


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
                {/* <div className="wrap_button_filter">
                    {setTagSearch ? 
                    <SetTagSearch
                        togglePopUp={togglePopUp}
                        saveTagSearch={saveTagSearch}
                        greatestValue={greatestValue}
                        filters={filters}
                    /> : null}
                    <button 
                        className={"btn savetag"}
                        onClick={!seenFilters ? showAllFilters : hideRestFilters}>
                        {!seenFilters ? "Показать все фильтры" : "Скрыть фильтры"}
                    </button>
                    <button 
                        className="btn resetFilters" 
                        onClick={resetFilters}>Сбросить фильтры</button>
                    <button 
                        disabled={filtering ? false : true} 
                        className={filtering ? "btn savetag" : "btn errortag"} 
                        onClick={togglePopUp}>Сохранить фильтр для быстрого поиска
                    </button>
                </div> */}
            </div>
		)
	}
// FilterList.propTypes = {
	
// }

export default connect((state)=> ({
    filters: createSelectorFilters(state),
    loading: loadingSelector(state)
}))(FilterList);