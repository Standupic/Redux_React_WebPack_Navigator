import React from "react";
import PropTypes from 'prop-types';
import Filter from './filter';
import {connect} from 'react-redux';
import SetTagSearch from './setTagSearch';


const  FilterList = (props) => {
    const {filters} = props;
    console.log(filters)
    // const {filters,
    //     resetFilters,
    //     handleToggleFilter,
    //     handleFilter,
    //     hideFilters,
    //     resetRadio,
    //     togglePopUp,
    //     setTagSearch,
    //     saveTagSearch,
    //     greatestValue,
    //     filtering,
    //     onChangeSlider,
    //     hideRestFilters,
    //     showAllFilters,
    //     seenFilters
    // } = props;
		return(
            <div className="an-navigator-filters">
                {
                    filters.map((obj,index)=>{
                        return(
                            <Filter 
                                item={obj}
                                toggle={obj['active']}
                                checked={obj['checked']}
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
// 	filters: PropTypes.array.isRequired,
// 	handleFilter: PropTypes.func.isRequired,
// 	handleToggleFilter: PropTypes.func.isRequired,
//     onChangeSlider: PropTypes.func.isRequired,
//     resetFilters: PropTypes.func.isRequired,
//     hideFilters: PropTypes.array.isRequired,
//     resetRadio: PropTypes.func.isRequired,
//     togglePopUp: PropTypes.func.isRequired,
//     setTagSearch: PropTypes.bool.isRequired,
//     saveTagSearch: PropTypes.func.isRequired,
//     greatestValue: PropTypes.array.isRequired,
//     filtering: PropTypes.func.isRequired,
//     onChangeSlider: PropTypes.func.isRequired

// }

export default connect((state)=>{
    return {
        filters: state.data.filters
    }
})(FilterList);