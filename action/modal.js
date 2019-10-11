import {HIDE_MODAL, SHOW_MODAL} from '../constans';

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