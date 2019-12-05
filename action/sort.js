import {SORT_TARIFS} from '../constans';

export const sortTarifs = (obj) => { // {param, value}
    return{
        type: SORT_TARIFS,
        payload: obj.value
    }
}