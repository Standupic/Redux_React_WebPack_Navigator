import React from 'react';
import {connect} from 'react-redux';
import {searchHandler} from '../action/search';
import {searchingTarifs} from '../selectors';
import {isNumeric} from '../helper';

const search = (props) => {
    const {searchHandler} = props;
    return(
        <React.Fragment>
            <input type="text"
                   onChange={(event)=>{
                        let str = event.target.value;
                        if(isNumeric(str*1)){
                            searchHandler(str*1)
                        }else{
                            str.toLowerCase()
                            str = str[0].toUpperCase() + str.slice(1).toLowerCase()
                            searchHandler(str)
                        }
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