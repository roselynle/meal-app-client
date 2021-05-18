import React, { useState, useEffect }  from 'react';
import { Switch, Route } from "react-router-dom";
import * as Pages from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';

// import './style.css';

function App() {
    const [user, setUser] = useState("");
    
    return (
        <>
            <Switch>
                <Route exact path="/" component={Pages.Home} />
                <Route path='/login' component={Pages.Login}/>
                <Route path='/register' component={Pages.Register}/>
                <Route path="/meals" component={Pages.Meals} />
                <Route exact path="/recipes" component={Pages.Recipes} />
                <Route path="/recipes/:id" component={Pages.RecipePage}/>
                <Route path="/newrecipe" component={Pages.AddRecipe}/>
                <Route component={Pages.NotFound} />
            </Switch>
            
        </>
    );
}

export default App;
