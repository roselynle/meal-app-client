const initState = {
    recipe: [],
    loading: true,
    error:false

}
  
const singleRecipeReducer = (state = initState, action) => {

    switch(action.type) {
        case 'LOAD_RECIPE':
            return ({
                ...state,
                recipe: action.payload,
                error: false,
                loading: false
             })
        case 'SET_ERROR':
        return { ...state, error: action.payload }

        default:  
            return state
         
    }
}

export default singleRecipeReducer;