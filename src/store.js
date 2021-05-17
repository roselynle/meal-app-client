import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {userReducer, recipeReducer} from './reducers'


const rootReducer = combineReducers({
    recipeReducer, // key name same as the carefully renamed default export
    user: userReducer,
  })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;