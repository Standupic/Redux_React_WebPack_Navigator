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
        NUMBER,
        TAG_SEARCH,
        RESET_FILTERS
        } from '../constans';

import {isNumeric} from '../helper/';


export default (state = new StructureState(), action)=>{
    const {type} = action;
    switch(type){
        case SET_QUANTITY_DISPLAY_TARIF:
            const param = action.param;
            return state
            .updateIn(['countTarifs'], v => !isNumeric(param) ? 8 : param)
        case TAG_SEARCH:
            return state
            .updateIn(['currentPage'], v => 1)
            .updateIn(['currentSectionPages'], v => 1)
        case RESET_FILTERS:
            return state
            .updateIn(['currentPage'], v => 1)
            .updateIn(['currentSectionPages'], v => 1)
        case MOVE_PAGINATION:
                console.log(action.param)

            switch(action.param[0]){
                case FIRST_SECTION:
                    return state
                    .updateIn(['currentPage'], v => 1)
                    .updateIn(['currentSectionPages'], v => 1)
                break;
                case LAST_SECTION:
                   return state
                    .updateIn(['currentPage'], v => Math.ceil(action.param[2] / state.get("countTarifs")))
                    .updateIn(['currentSectionPages'], v => action.param[1])
                break;
                case NEXT:
                    if(state.get("currentPage") == Math.ceil(action.param[1] / state.get("countTarifs"))) return state
                return state
                    .updateIn(['currentPage'], v => v+1)
                    .updateIn(['currentSectionPages'], v => 
                    (state.get('countTarifs') * state.get("currentSectionPages") == state.get("currentPage")) ?
                    v+1 : v)
                break;
                case PREV:
                    if(state.get("currentPage") == state.get("currentSectionPages")) return state 
                    let step = ((state.get('countTarifs') * state.get("currentSectionPages")) - state.get("countTarifs"));
                    return state
                    .updateIn(['currentPage'], v => v-1)
                    .updateIn(['currentSectionPages'], v => (step < (state.get('currentPage') - 1) ?
                    v : step / state.get("countTarifs")))
                break;
                case NUMBER:
                    return state
                    .updateIn(['currentPage'], v => action.param[1])
            default:
                return state
            }
        default:
            return state
    }
}