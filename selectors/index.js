import {createSelector} from 'reselect';
import {toArray, toIndexedSeq, toJS} from 'immutable';
import {filter,includes} from 'lodash/collection';
// import {isNumeric} from '../helper';

import {reduceObject,
       separatorPage,
       pageNumbers,
       filteringRanging,
       hideShowFiltersInputs,
       } from '../helper';

import {
	ACS,
	DES,
	TYPE_SUGGESTION_A_Я,
	TYPE_SUGGESTION_Я_A
    } from '../constans'
import { searchHandler } from '../action/search';


export const dataSelector = (state) => state.data.data;

export const filterSelector = (state) => state.filters.filters.toIndexedSeq()

export const sortSelector = (state) => state.sort.isSort

export const searchSelector = (state) => state.search.search

export const checkedSelector = (state) => state.filters.checked.toJS()
export const sliderSelector = (state) => state.filters.slider.toJS()
export const selectSelector = (state) => state.filters.select.toJS()


export const tagsSelector = (state) => state.tags.tags

export const hideShowSelector = (state) => state.data.hideShowData.toIndexedSeq().toJS()


export const paginationSelector = (state) => state.pagination.toJS()



export const searchingTarifs = createSelector(
    dataSelector,
    searchSelector,
    (dataSelector, searchSelector) => {
        if(searchSelector === "") return dataSelector
        return filter(dataSelector,(obj)=>{
                return includes(obj.nametarifonyma.toLowerCase(),searchSelector)
          })
    }
)


export const sortingTarifs = createSelector(
    searchingTarifs,
    sortSelector,
    (searchingTarifs,sortSelector) => {
        switch(sortSelector){
            case ACS:
                return searchingTarifs.sort((a,b) =>{ return a.navigatorprice - b.navigatorprice})
            case DES:
                return searchingTarifs.sort((a,b) =>{
                    if(a.navigatorprice > b.navigatorprice) return -1;
                    if(a.navigatorprice < b.navigatorprice) return 1;
                })
            case TYPE_SUGGESTION_A_Я:
                return searchingTarifs.sort((a,b) => { return a.typesuggestion.localeCompare(b.typesuggestion)})
            case TYPE_SUGGESTION_Я_A:
                return searchingTarifs.sort((a,b) => { return b.typesuggestion.localeCompare(a.typesuggestion)})
            default:
                return searchingTarifs
        }
    }
)

// DATA

export const createSelectorData = createSelector(
    searchingTarifs,
    checkedSelector,
    sliderSelector,
    selectSelector,
    searchSelector,
    sortingTarifs,
    paginationSelector,
    (searchingTarifs,
    checkedSelector,sliderSelector,selectSelector
    ) =>{
        return filteringRanging(searchingTarifs,{...checkedSelector,...selectSelector},sliderSelector)
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
//SELECT

export const createSelectorSelect = createSelector(
    selectSelector,
    (selectSelector) => {
        return selectSelector
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
                countTarifs,
                length:createSelectorData.length,
                currentSectionPages,
                data,
            }

    }
)
//END PAGINATION