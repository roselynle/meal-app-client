const initState = {
    favrecipes: [],
    loading: false

}
  
const favRecipeReducer = (state = initState, action) => {

    switch(action.type) {
        case 'LOAD_FAV_RECIPES':
            return ({
                ...state,
                favrecipes: action.payload,
                error: false
             })
        // case 'SET_ERROR':
        // return { ...state, error: action.payload }

        default:  
            return state
         
    }
}

export default favRecipeReducer;