import React from 'react';
import {connect} from 'react-redux';
import {searchHandler} from '../action/search';
import {searchingTarifs} from '../selectors';

const search = (props) => {
    const {searchHandler} = props;
    return(
        <React.Fragment>
            <input type="text"
                   onChange={(event)=>{
                        searchHandler(event.target.value)
                    }} 
                   className="an-section-2-search" 
                   placeholder="Поиск"/>
        </React.Fragment>
        
    )
}

// export default search;
export default connect((state) => ({
    data: searchingTarifs(state)
}),{searchHandler})(search)