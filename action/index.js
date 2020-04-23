// API
export const callAPI = () => {
    return{
        type: "API",
        meta:[
            // "http://cc.wifire.ru:4000/tarifs",
            "./tarifs.json",
            "./default_params.json",
            "./tags.json"
        ]
    }
}
//end API
