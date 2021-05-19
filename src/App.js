import React, { useState, useEffect }  from 'react';
import { Switch, Route } from "react-router-dom";
import * as Pages from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'

// import './style.css';

function App() {
    const [loggedIn, setLoggedIn] = useState("false");

    const history = useHistory()

    const login = async(username, password) => {
    const userData = {username: username, password: password}
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }
        const r = await fetch(`http://localhost:5000/login`, options)
        console.log(r)
        const data = await r.json()
        console.log(data)
        if (data.err){ throw Error(data.err); }
        sessionStorage.setItem('username', data )
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
