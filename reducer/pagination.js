import {MOVE_PAGINATION, SET_QUANTITY_DISPALY_TARIF} from '../constans';
import {isNumeric} from '../helper/';

const initialState = {
    currentPage: 1,
    countTarifs: 8,
    currentSectionPages: 1
}
export default (state = initialState, action)=>{
    const {type} = action;
    const param = action.param;
    const{currentSectionPages,countTarifs,currentPage} = state
    switch(type){
            case SET_QUANTITY_DISPALY_TARIF:
                if(!isNumeric(param)) return;
                return{
                    ...state,
                    countTarifs: param,
                    currentSectionPages: 1,
                    currentPage: 1
                }
            case MOVE_PAGINATION:
                switch(param[0]){
                    case "firstSection":
                        return{
                            ...state,
                            currentPage: 1,
                            currentSectionPages: 1
                        }
                    case "lastSection":
                        return{
                            ...state,
                            currentPage: Math.ceil(param[2] / countTarifs),
                            currentSectionPages: param[1]
                        }
                    case "next":
                        if(currentPage == Math.ceil(param[1] / countTarifs)) return
                        return{
                            ...state,
                            currentPage: currentPage+1,
                            currentSectionPages: ((countTarifs * currentSectionPages) == currentPage) ?
                            currentSectionPages + 1
                         :
                            currentSectionPages
                        }
                    case "prev":
                        if(currentPage == currentSectionPages) return
                        let step = ((countTarifs * currentSectionPages) - countTarifs);
                        return{
                            ...state,
                            currentPage: currentPage - 1,
                            currentSectionPages: (step < (currentPage - 1)) ? currentSectionPages
                            :
                            step / countTarifs
                        }
                }
        default:
            return state
    }
    
}