import {createSelector} from 'reselect';
import {
	ACS,
	DES,
	TYPE_SUGGESTION_A_Я,
	TYPE_SUGGESTION_Я_A
    } from '../constans'

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
        }
    }
)