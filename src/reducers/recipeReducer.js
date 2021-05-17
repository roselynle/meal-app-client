const initState = {
    recipes: [  {test:"test"},
    {test:'test1'}],
    loading: true

}
  
const recipeReducer = (state = initState, action) => {

    switch(action.type) {
        case 'LOAD_RECIPES':
            return ({
                ...state,
                recipes: action.payload,
                error: false
             })
        // case 'SET_ERROR':
        // return { ...state, error: action.payload }

        default:  
            return state
         
    }
}

export default recipeReducer;

