import {createSelector} from 'reselect';
import {toArray, toIndexedSeq} from 'immutable';

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

//FILTERS
export const filterSelector = (state) => state.filters.filters.toIndexedSeq().toArray()
export const createSelectorFilters = createSelector(
    filterSelector,
    (filterSelector) =>{
        console.log(filterSelector,"FITLERSSELECTOR")
        return filterSelector
    }
)
//END FILTERS

//CHECKED
export const checkedSelector = (state) => state.filters.checked.toJS()
export const createSelectorChecked = createSelector(
    checkedSelector,
    (checkedSelector) =>{
        console.log(checkedSelector,"SELECTOR")
        return checkedSelector
    }
)
//END CHECKED


//TAGS
export const tagsSelector = (state) => state.tags.tags.toIndexedSeq().toArray()
export const createSelectorTags = createSelector(
    tagsSelector,
    (tagsSelector) =>{
        return tagsSelector
    }
)
//END TAGS

export const loadingSelector = (state) => state.data.loading