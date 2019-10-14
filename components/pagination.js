import React from "react";
import {separator} from '../helper';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loader from "./loader";
import {movePagination} from '../action/pagination';
import {
    NEXT,
    PREV,
    FIRST_SECTION,
    LAST_SECTION,
    NUMBER
    } from '../constans';

const Pagination =(props)=>{
    const {countTarifs,
          filteredData,
          data,
          currentPage,
          currentSectionPages,
          loading,
          movePagination} = props;

    const renderData = filteredData.length ? filteredData : data;
    const quantity = renderData.length;
    
	const pageNumbers = [];
	for(let i = 1; i <= Math.ceil(renderData.length / countTarifs); i++){
		pageNumbers.push(i)
	}
	const paginationObject = separator(pageNumbers, currentSectionPages, countTarifs);
    const {divided,lastIndexSection} = paginationObject;
    
	return(
        <React.Fragment>
        {loading ? 
            <Loader/>
        :
		<ul>
            <li className={(1 == currentSectionPages) 
                ? 
                "active arrow" 
                :  
                "arrow"} 
                value={"firstSection"}
                onClick={(obj)=>{movePagination(FIRST_SECTION)}}>В начало
            </li>
            <li className="prev"
                value={"prev"}
                onClick={(obj)=>{movePagination(PREV)}}>&lt;
            </li>
            {
                divided.map((number, key)=>{
                    return(
                        <li value={number} 
                            key={key}
                            onClick={(obj)=>{movePagination(NUMBER,number)}}
                            className={currentPage == number ? "active" : null}>{number}
                        </li>
                    )
                })
            } 
            <li className="next" 
                value={"next"}
                onClick={(obj)=>{movePagination(NEXT,quantity)}}>
            &gt;
            </li>
            <li className={(lastIndexSection == currentSectionPages) 
                ? 
                "active arrow" 
                : 
                "arrow"} value={"lastSection"}
                onClick={(obj)=>{movePagination(LAST_SECTION,lastIndexSection,quantity)}}>В конец
            </li>
		</ul>
        }
    </React.Fragment>
	)
}

Pagination.propTypes = {
	countTarifs: PropTypes.number.isRequired,
	// filteredData: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    currentSectionPages: PropTypes.number.isRequired
}

export default connect((state)=>{
    const {data,loading} = state.data
    const {countTarifs, currentPage, currentSectionPages} = state.pagination;
    return {
        data,
        countTarifs,
        currentPage,
        currentSectionPages,
        filteredData: [],
        loading
    }
},{movePagination})(Pagination);