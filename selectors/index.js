import {createSelector} from 'reselect';
import {toArray, toIndexedSeq, toJS} from 'immutable';

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

export const filterSelector = (state) => state.filters.filters.toIndexedSeq()

export const checkedSelector = (state) => state.filters.checked.toJS()

// export const isSeenSelector = (state) => state.filters.is_seen.toJS()

export const tagsSelector = (state) => state.tags.tags.toIndexedSeq()


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

//CHECKED

export const createSelectorChecked = createSelector(
    checkedSelector,
    (checkedSelector) =>{
        // console.log(checkedSelector,"SELECTORCHECKED")
        return checkedSelector
    }
)

export const isFiltering = createSelector(
    checkedSelector,
    (checkedSelector) => {
      return Object.values(checkedSelector).map((item)=>{
            return item.length
          }).reduce((acc,item) => {
            return acc + item
          },0)
    }
)
//END CHECKED

//IS_SEEN
// export const createSelectorIs_Seen = createSelector(
//     isSeenSelector,
//     (isSeenSelector) => {
//         return isSeenSelector
//     }
// )

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