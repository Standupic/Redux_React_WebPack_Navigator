import React,{useEffect} from "react";
import {connect} from 'react-redux';
import {setQuantityTarifs} from '../action/pagination';
import Select from './select';
import data from "../data/select";

const Quantity = (props) =>{
    const {setQuantityTarifs} = props;
    return(
        <Select
            data={data[0].quantity}
            handler={setQuantityTarifs}
        />
    )
}

export default connect(
    null,
{setQuantityTarifs})(Quantity);