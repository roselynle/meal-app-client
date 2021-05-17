store.js


import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { recipeReducer } from './reducers'


const rootReducer = combineReducers({
    recipeReducer, // key name same as the carefully renamed default export
    // specific key name instead of the variable name
  })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
