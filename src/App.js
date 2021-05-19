import React, { useState, useEffect }  from 'react';
import { Switch, Route } from "react-router-dom";
import * as Pages from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'
import { PrivateRoute } from "./components"

// import './style.css';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const history = useHistory()

    const login = async(username, password) => {
    const userData = {username: username, password: password}
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }
        const r = await fetch(`https://meal-prep-api.herokuapp.com/login`, options)
        console.log(r)
        const data = await r.json()
        console.log(data)
        if (data.err){ throw Error(data.err); }
        sessionStorage.setItem('username', data[0] )
        sessionStorage.setItem('id', data[1] )
        setLoggedIn(true)
        history.push("/meals")
    } catch (err) {
        console.warn(`Error: ${err}`);
    }
}
    
    return (
        <>
            <Switch>
                <Route exact path="/" component={Pages.Home} />
                <Route path='/login'> <Pages.Login login={login}/></Route>
                <Route path='/register' component={Pages.Register}/>
                <PrivateRoute path="/meals" loggedIn={loggedIn} component={Pages.Meals} />
                <PrivateRoute exact path="/recipes" loggedIn={loggedIn} component={Pages.Recipes} />
                <Route path="/recipes/:id" loggedIn={loggedIn} component={Pages.RecipePage}/>
                <PrivateRoute path="/newrecipe" loggedIn={loggedIn} component={Pages.AddRecipe}/>
                <Route component={Pages.NotFound} />
            </Switch>
            
        </>
    );
}

export default App;
