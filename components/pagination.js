import React from "react";
import {separator} from '../helper';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loader from "./loader";

const Pagination =(props)=>{
    const {countTarifs,
          filteredData,
          data,
          currentPage,
          currentSectionPages,
          loading} = props;
          
	const renderData = filteredData.length ? filteredData : data;
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
                "arrow"} value={"firstSection"}>В начало
            </li>
            <li className="prev"  value={"prev"}>&lt;</li>
            {
                divided.map((number, key)=>{
                    return(
                        <li value={number} key={key} className={currentPage == number ? "active" : null}>{number}</li>
                    )
                })
            } 
            <li className="next" value={"next"}>&gt;</li>
            <li className={(lastIndexSection == currentSectionPages) 
                ? 
                "active arrow" 
                : 
                "arrow"} value={"lastSection"}>В конец
            </li>
		</ul>
        }
    </React.Fragment>
	)
}

// Pagination.propTypes = {
// 	countTarifs: PropTypes.number.isRequired,
// 	filteredData: PropTypes.array.isRequired,
//     data: PropTypes.array.isRequired,
//     currentPage: PropTypes.number.isRequired,
//     currentSectionPages: PropTypes.number.isRequired
// }
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
})(Pagination);