import {MOVE_PAGINATION,SET_QUANTITY_DISPLAY_TARIF} from '../constans';

export const movePagination = (...param) => {
    return{
        type: MOVE_PAGINATION,
        param: [...param]
    }
}

export const setQuantityTarifs = (str) => {
    return{
        type: SET_QUANTITY_DISPLAY_TARIF,
        param: str * 1
    }
}