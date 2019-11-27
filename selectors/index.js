import {createSelector} from 'reselect';
import {toArray, toIndexedSeq, toJS} from 'immutable';
import {reduceObject,
       separatorPage,
       pageNumbers,
       rangingTarifs,
       multipleSearch,
       filteringRanging,
       hideShowFiltersInputs,
       isEmpty} from '../helper';

import {
	ACS,
	DES,
	TYPE_SUGGESTION_A_Я,
	TYPE_SUGGESTION_Я_A
    } from '../constans'


export const dataSelector = (state) => state.data.data;

export const filterSelector = (state) => state.filters.filters.toIndexedSeq()

export const sortSelector = (state) => state.sort.isSort

export const checkedSelector = (state) => state.filters.checked.toJS()
export const sliderSelector = (state) => state.filters.slider.toJS()

export const tagsSelector = (state) => state.tags.tags

export const hideShowSelector = (state) => state.data.hideShowData.toIndexedSeq().toJS()


export const paginationSelector = (state) => state.pagination.toJS()



export const sortingTarifs = createSelector(
    dataSelector,
    sortSelector,
    (dataSelector,sortSelector) => {
        switch(sortSelector){
            case ACS:
                return dataSelector.sort((a,b) =>{ return a.navigatorprice - b.navigatorprice})
            case DES:
                return dataSelector.sort((a,b) =>{
                    if(a.navigatorprice > b.navigatorprice) return -1;
                    if(a.navigatorprice < b.navigatorprice) return 1;
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

// DATA

export const createSelectorData = createSelector(
    dataSelector,
    checkedSelector,
    sliderSelector,
    sortingTarifs, 
    paginationSelector,
    (dataSelector,
    checkedSelector,sliderSelector
    ) =>{
        return filteringRanging(dataSelector,checkedSelector,sliderSelector)
    }    
)




// END DATA 


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
       var x = reduceObject(checkedSelector)
       var y = reduceObject(sliderSelector)
       return {...x,...y}
    }
)

export const createSelectorHideShowInputs = createSelector(
    dataSelector,
    checkedSelector,
    (dataSelector,checkedSelector) =>{
        return hideShowFiltersInputs(dataSelector,checkedSelector)
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

// LOADING
export const loadingSelector = (state) => state.data.loading
// END LOADING


//PAGINATION
export const createSelectorDivided = createSelector(
    paginationSelector,
    createSelectorData,
    (paginationSelector,createSelectorData)=>{
    const {
        countTarifs,
        currentPage,
        currentSectionPages
        } = paginationSelector;

    const getPageNumbers = pageNumbers(createSelectorData.length,countTarifs); 
    const paginationObject = separatorPage(getPageNumbers,currentSectionPages,countTarifs);
    const data = separatorPage(createSelectorData,currentPage,countTarifs).divided

    return {...paginationObject,
                currentPage,
                length:createSelectorData.length,
                currentSectionPages,
                data,
            }

    }
)
//END PAGINATION