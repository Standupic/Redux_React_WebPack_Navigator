import React,{useEffect} from "react";
import {connect} from 'react-redux';
import {sortTarifs} from '../action/sort';
import {sortingTarifs} from '../selectors';

import {
	ACS,
	DES,
	TYPE_SUGGESTION_A_Я,
	TYPE_SUGGESTION_Я_A
    } from '../constans'


const SorterFilter = (props) =>{
    var anStyler;
    useEffect(()=>{
    	$(anStyler).styler({
			onSelectClosed: ()=>{
				props.sortTarifs(anStyler.value)
			},
		}); 
    })
	return(
        <select className="an-styler" ref={(el) => anStyler = el}>
            <option defaultValue>Сортировать:</option>
            <option value={ACS}>По цене/возрастание</option>
            <option value={DES}>По цене/убывание</option>
            <option value={TYPE_SUGGESTION_A_Я}>Тип предложения/A-Я</option>
            <option value={TYPE_SUGGESTION_Я_A}>Тип предложения/Я-A</option>
        </select>
		)
}

 

export default connect((state) => ({
    data: sortingTarifs(state)
})
,{sortTarifs})(SorterFilter);