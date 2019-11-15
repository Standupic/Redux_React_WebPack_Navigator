import {createSelector} from 'reselect';
import {toArray, toIndexedSeq, toJS} from 'immutable';
import {isEmptyFilters} from '../helper';

import {
	ACS,
	DES,
	TYPE_SUGGESTION_A_Я,
	TYPE_SUGGESTION_Я_A
    } from '../constans'

export const sortSelector = (state) => state.sort.type;
export const dataSelector = (state) => state.data.data;

export const filterSelector = (state) => state.filters.filters.toIndexedSeq()

export const checkedSelector = (state) => state.filters.checked.toJS()
export const sliderSelector = (state) => state.filters.slider.toJS()

export const tagsSelector = (state) => state.tags.tags

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

export const createSelectorFilters = createSelector(
    filterSelector,
    // isSeenSelector,
    (filterSelector) =>{    
        return filterSelector.filter((item)=>{
            return item['is_seen'] == true
        })
    }
)
//END FILTERS

//SLIDER
export const createSelectorSlider = createSelector(
    sliderSelector,
    (sliderSelector) =>{
        return sliderSelector
    }
)
//END SLIDER

//CHECKED

export const createSelectorChecked = createSelector(
    checkedSelector,
    (checkedSelector) =>{
        return checkedSelector
    }
)


export const isFiltering = createSelector(
    checkedSelector,
    sliderSelector,
    (checkedSelector,sliderSelector) => {
       var x = isEmptyFilters(checkedSelector)
       var y = isEmptyFilters(sliderSelector)
       return {...x,...y}
    }
)
//END CHECKED

//IS_SEEN

//END IS_SEEN

//TAGS
export const createSelectorTags = createSelector(
    tagsSelector,
    (tagsSelector) =>{
        return tagsSelector
    }
)
//END TAGS

export const loadingSelector = (state) => state.data.loading