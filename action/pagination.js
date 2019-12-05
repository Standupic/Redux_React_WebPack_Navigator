import {MOVE_PAGINATION,SET_QUANTITY_DISPLAY_TARIF} from '../constans';

export const movePagination = (...param) => {
    return{
        type: MOVE_PAGINATION,
        param: [...param]
    }
}

export const setQuantityTarifs = (obj) => { // {param,value}
    return{
        type: SET_QUANTITY_DISPLAY_TARIF,
        value: obj.value * 1
    }
}