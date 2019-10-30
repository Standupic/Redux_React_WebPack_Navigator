// API
export const callAPI = () => {
    return{
        type: "API",
        meta:[
            // "http://cc.wifire.ru:4000/tarifs",
            "../data/tarifs.json",
            "../data/d2.json",
            "../data/tags.json"
        ]
    }
}
//end API

export const setValueSlider = (event,obj) =>{
    console.log(obj,"action")
    return{
        type: "ONCHANGE_SLIDER",
        data: obj
    }
}