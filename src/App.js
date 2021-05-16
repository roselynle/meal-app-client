import React from "react";
import { Switch, Route } from "react-router-dom";
import * as Pages from "./pages";
// import './style.css';

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Pages.Home} />
                <Route path='/login' component={Pages.Login}/>
                <Route path='/register' component={Pages.Register}/>
                <Route path="/meals" component={Pages.Meals} />
                <Route path="/recipes" component={Pages.Recipes} />
                <Route component={Pages.NotFound} />
            </Switch>
        </>
    );
}

export default App;
