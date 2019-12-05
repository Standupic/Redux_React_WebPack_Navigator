import React,{useEffect} from "react";
import {connect} from 'react-redux';
import {sortTarifs} from '../action/sort';
import {sortingTarifs} from '../selectors';
import Select from './select';
import data from "../data/select";


const SorterFilter = (props) =>{
    const {sortTarifs} = props;
    return(
        <Select 
            data={data[0].sort}
            handler={sortTarifs}
        />
    )
}

export default connect((state) => ({
    data: sortingTarifs(state)
})
,{sortTarifs})(SorterFilter);