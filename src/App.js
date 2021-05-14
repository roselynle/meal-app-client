import React from "react";
import { Switch, Route } from "react-router-dom";
import * as Pages from "./pages";
// import './style.css';

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Pages.Home} />
                <Route path="/recipes" component={Pages.Recipes} />
            </Switch>
        </>
    );
}

export default App;
