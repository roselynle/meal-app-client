import React from "react";
import { Switch, Route } from "react-router-dom";
import * as Pages from "./pages";
import AddRecipeForm from "./components/AddRecipeForm"
import 'bootstrap/dist/css/bootstrap.min.css';

// import './style.css';

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Pages.Home} />
                <Route path="/recipes" component={Pages.Recipes} />
            </Switch>
            <AddRecipeForm/>
        </>
    );
}

export default App;
