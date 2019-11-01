import {Record} from 'immutable';

const StructureState = new Record({
    currentPage: 1,
    countTarifs: 8,
    currentSectionPages: 1
})

import {
        MOVE_PAGINATION,
        SET_QUANTITY_DISPLAY_TARIF,
        NEXT,
        PREV,
        FIRST_SECTION,
        LAST_SECTION,
        NUMBER
        } from '../constans';

import {isNumeric} from '../helper/';


export default (state = new StructureState(), action)=>{
    const {type} = action;
    const param = action.param;
    switch(type){
        default:
            return state
    }
    // switch(type){
    //         case SET_QUANTITY_DISPLAY_TARIF:
    //             if(!isNumeric(param)) return;
    //             return{
    //                 ...state,
    //                 countTarifs: param,
    //                 currentSectionPages: 1,
    //                 currentPage: 1
    //             }
    //         case MOVE_PAGINATION:
    //             switch(param[0]){
    //                 case FIRST_SECTION:
    //                     return{
    //                         ...state,
    //                         currentPage: 1,
    //                         currentSectionPages: 1
    //                     }
    //                 case LAST_SECTION:
    //                     return{
    //                         ...state,
    //                         currentPage: Math.ceil(param[2] / countTarifs),
    //                         currentSectionPages: param[1]
    //                     }
    //                 case NEXT:
    //                     if(currentPage == Math.ceil(param[1] / countTarifs)) return state
    //                     return{
    //                         ...state,
    //                         currentPage: currentPage+1,
    //                         currentSectionPages: ((countTarifs * currentSectionPages) == currentPage) ?
    //                         currentSectionPages + 1
    //                      :
    //                         currentSectionPages
    //                     }
    //                 case PREV:
    //                     if(currentPage == currentSectionPages) return state 
    //                     let step = ((countTarifs * currentSectionPages) - countTarifs);
    //                     return{
    //                         ...state,
    //                         currentPage: currentPage - 1,
    //                         currentSectionPages: (step < (currentPage - 1)) ? currentSectionPages
    //                         :
    //                         step / countTarifs
    //                     }
    //                 case NUMBER:
    //                 return{
    //                     ...state,
    //                     currentPage: param[1]
    //                 }
    //             }
    //     default:
    //         return state
    // }
    
}