import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loader from "./loader";
import {movePagination} from '../action/pagination';
import {createSelectorDivided,loadingSelector} from '../selectors';

import {
    NEXT,
    PREV,
    FIRST_SECTION,
    LAST_SECTION,
    NUMBER
    } from '../constans';

const Pagination =(props)=>{
    const {paginationObject,
          movePagination,loading} = props;
    
    const {currentSectionPages,
        currentPage,
        divided,
        lastIndexSection,
        countTarifs,
        length} = paginationObject;
        console.log(divided)
	return(
        <React.Fragment>
        {loading ? 
            <Loader/>
        :
		<ul>
            <li className={(currentPage === currentSectionPages) 
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
            {   currentPage >= countTarifs + 1 && lastIndexSection >= countTarifs ?
                <React.Fragment>
                <li>{1}</li>
                <li>
                    ...
                </li>
                </React.Fragment>
                :
                null
             
            }
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
            {   currentPage > countTarifs  && length >= countTarifs ?
                <React.Fragment>
                <li>
                    ...
                </li>
                <li>{length}</li>
                </React.Fragment>
                :
                null
            }
            <li className="next" 
                value={"next"}
                onClick={(obj)=>{movePagination(NEXT,length)}}>
            &gt;
            </li>
            <li className={currentSectionPages  === lastIndexSection
                ? 
                "active arrow" 
                : 
                "arrow"} value={"lastSection"}
                onClick={(obj)=>{movePagination(LAST_SECTION,lastIndexSection,length)}}>В конец
            </li>
		</ul>
        }
    </React.Fragment>
	)
}

Pagination.propTypes = {
	paginationObject: PropTypes.object.isRequired,
}

export default connect((state)=>({
   paginationObject: createSelectorDivided(state),
   loading: loadingSelector(state)
}),{movePagination})(Pagination);