import {SELECT_FILTER} from '../constans';

export const selectFilter = (select) => {  // {param: []}
    return {
        type: SELECT_FILTER,
        select
    }
}