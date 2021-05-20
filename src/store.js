import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {recipeReducer, singleRecipeReducer, favRecipeReducer} from './reducers'


const rootReducer = combineReducers({
    recipeReducer,
    singleRecipeReducer,
    favRecipeReducer// key name same as the carefully renamed default export
   
  })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;