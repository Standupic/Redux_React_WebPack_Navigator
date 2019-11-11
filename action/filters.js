import {
    HANDLER_FILTERING_CHECKBOX,
    HANDLER_FILTERING_RADIO,
    TOGGLE_FILTER,
    HIDE_SHOW_FITLERS,
    RESET_FILTERS,
    HANDLER_SLIDER,
    RESET_RADIO,
} from '../constans';

export const handlerFilteringCheckbox = (obj) =>{ // {param:str,value:str}
   console.log(obj)
   return {
        type: HANDLER_FILTERING_CHECKBOX,
        checkbox: obj
    }
}

export const handlerFilteringRadio = (obj) => { // {param:str, value: str}
    console.log(obj)
    return {
        type: HANDLER_FILTERING_RADIO,
        radio: obj
    }
}

export const handleToggleFilter = (param) =>{ // {param: str}
    return{
        type: TOGGLE_FILTER,
        param: param
    }
}
export const handlerHideShowFilters = (flag) =>{ // boolen
    return {
        type: HIDE_SHOW_FITLERS,
        flag: flag
    }
}
export const handlerSlider = (ev,obj) => { // {param: str, value: []}
    return{
        type: HANDLER_SLIDER,
        slider: obj 
    }
}

export const handlerResetRadio = (param) => { // str
    console.log(param)
    return{
        type: RESET_RADIO,
        param: param
    }
}

export const handlerResetFilters = () =>{ 
    return{
        type: RESET_FILTERS,
    }
}
