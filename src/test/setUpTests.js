import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import rootReducer from "../store";
import {MemoryRouter } from 'react-router-dom';


const TestProviders = ({ initState, initState2, initState3 }) => {
  initState ||=     { recipes: ["fish", "chicken"],
    loading: false};

  initState2 ||= {
      favrecipes: [],
      loading: false
  
  }

initState3 ||= {
    recipe: [],
    loading: true,
    error:false

}
  
let testfavRecipeReducer = () => favRecipeReducer(initState2, { type: "@@INIT" });
let testrecipeReducer = () => recipeReducer(initState, { type: "@@INIT"})
let testsingleRecipeReducer = () => singleRecipeReducer(initState3, { type: "@@INIT"})


const rootReducer = combineReducers({
  recipeReducer: testrecipeReducer,
    singleRecipeReducer: testsingleRecipeReducer,
    favRecipeReducer: testfavRecipeReducer
})
  
  const testStore = createStore(rootReducer
    ,
    applyMiddleware(thunk)
  );

  return ({ children }) => (
    <Provider store={testStore}><MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
};



const renderWithReduxProvider = (ui, options = {}) => {
  let TestWrapper = TestProviders(options);
  render(ui, { wrapper: TestWrapper, ...options });
};

import axios from "axios";
import { favRecipeReducer, recipeReducer, singleRecipeReducer } from '../reducers';
jest.mock("axios");
axios.get.mockResolvedValue({ data: { message: [] } });

global.renderWithReduxProvider = renderWithReduxProvider;
global.React = React;
global.render = render;
global.userEvent = userEvent;