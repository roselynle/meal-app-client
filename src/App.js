import React, { useState, useEffect }  from 'react';
import { Switch, Route } from "react-router-dom";
import * as Pages from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'
import { PrivateRoute } from "./components"
import {apiUrl} from '../config/config.js';

// import './style.css';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState()

    const history = useHistory()

    const login = async(username, password) => {
    const userData = {username: username, password: password}
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }
        const r = await fetch(`${apiUrl}/login`, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err); }
        if (data.status === 500) {alert("login unsuccessful")}
        sessionStorage.setItem('username', data[0] )
        sessionStorage.setItem('id', data[1] )
        setError()
        setLoggedIn(true)
        history.push("/meals")
    } catch (err) {
        console.warn(`Error: ${err}`);
        setError("Login unsuccessful - please check your credentials");
    }
}
    
    return (
        <>
            
            <Switch>
                <Route exact path="/" component={Pages.Home} />
                <Route path='/login'> <Pages.Login error={error} login={login}/></Route>
                <Route path='/register' component={Pages.Register}/>
                <PrivateRoute path="/meals" loggedIn={loggedIn} component={Pages.Meals} />
                <Route exact path="/recipes" loggedIn={loggedIn} component={Pages.Recipes} />
                <Route path="/recipes/:id" loggedIn={loggedIn} component={Pages.RecipePage}/>
                <PrivateRoute path="/newrecipe" loggedIn={loggedIn} component={Pages.AddRecipe}/>
                <Route component={Pages.NotFound} />
            </Switch>
            
        </>
    );
}

export default App;