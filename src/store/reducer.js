const initialState ={
    //here we declare the variables that we wants to contain the data that we will send to it from the app.js file or the components
    offers:[],
    offersHistory:[],
    filter:"all"
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        //here we declare the cases so we can send or get the data from components, we use action.value for that , and action.type is the case here
        case "SET_OFFERS":
            return{
                ...state,
                offers:action.value
            }
        case "SET_FILTER_OFFERS":
            return{
                ...state,
                filter:action.value
            }
        case "SET_OFFERS_HISTORY":
            return{
                ...state,
                offersHistory:action.value
            }
        default:
            return state;
    }
}

export default rootReducer;