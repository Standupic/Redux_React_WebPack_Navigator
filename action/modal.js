import {HIDE_MODAL, SHOW_MODAL,HIDE_SHOW} from '../constans';

export const hideModal = () => {
    return{
        type: HIDE_MODAL,
        open: false
    }
}

export const showModal = (id) => {
    return{
        type: SHOW_MODAL,
        open: true,
        id: id
    }
}

export const hideShowParam = (obj) => {
    return{
        type: HIDE_SHOW,
        ...obj
    }
}