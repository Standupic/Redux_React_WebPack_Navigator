const initialState = {
    currentPage: 1,
    countTarifs: 8,
    currentSectionPages: 1
}
export default (state = initialState, action)=>{
    return {
        ...state
    }
}