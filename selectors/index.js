import {createSelector} from 'reselect';
import {
	ACS,
	DES,
	TYPE_SUGGESTION_A_Я,
	TYPE_SUGGESTION_Я_A
    } from '../constans'
import filters from '../reducer/filters';
import { values } from 'regenerator-runtime';
import { filter } from 'minimatch';

export const sortSelector = (state) => state.sort.type;
export const dataSelector = (state) => state.data.data;

export const sortingTarifs = createSelector(
    dataSelector,
    sortSelector,
    (dataSelector,sortSelector) => {
        switch(sortSelector){
            case ACS:
                return dataSelector.sort((a,b) =>{ return a.onetimepayment - b.onetimepayment})
            case DES:
                return dataSelector.sort((a,b) =>{
                    if(a.onetimepayment > b.onetimepayment) return -1;
                    if(a.onetimepayment < b.onetimepayment) return 1;
                })
            case TYPE_SUGGESTION_A_Я:
                return dataSelector.sort((a,b) => { return a.typesuggestion.localeCompare(b.typesuggestion)})
            case TYPE_SUGGESTION_Я_A:
                return dataSelector.sort((a,b) => { return b.typesuggestion.localeCompare(a.typesuggestion)})
            default:
                return dataSelector
        }
    }
)

export const filterSelector = (state) => {
    const obj = state.filters.filters
    if(obj){
        return Object.values(obj)
    }
}

export const sliderSelector = (state) => {
    const slider = state.filters.filters['navigatorprice']
    const values = slider['values'];
    return values 
}



// export const filters = (state) => state.data.filters
// export const paramFilters = (state) => state.filters.paramFilters;


// export const changeFilters = createSelector(
//     filterSelector,
//     paramFilters,
//     (filterSelector,paramFilters) => { 
//        for(var key in paramFilters){
//            if(filterSelector[key]){
//                console.log("!")
//                const filter = filterSelector[key];
//                return{
//                    ...filterSelector,
//                    [filterSelector[key]]:{
//                        ...filters,
//                        checked: (filter.checked || []).concat(paramFilters[key])
//                    }
//                }
//            }
//        }
//     }
// )

