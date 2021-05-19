import React, { useState } from "react";
import "../../App.css";
import { useHistory } from 'react-router-dom'

const LoginForm = ({login}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory()

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await dispatch(loginUser(username, password))
    //     if (response) {
    //    history.push("/meals");
    // }
    // };


// async function handleSubmit(e){
//     e.preventDefault();
//     const loginData = { username, password }
//     console.log(loginData)
//     try {
//         const options = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(loginData)
//         }
//         const r = await fetch(`http://localhost:5000/login`, options)
//         console.log(r)
//         const data = await r.json()
//         console.log(data)
//         if (data.err){ throw Error(data.err); }
//         login(data);
//     } catch (err) {
//         console.warn(`Error: ${err}`);
//     }
// }

// function login(data){
//     console.log(data)
//     sessionStorage.setItem('username', data);
//     history.push("/meals")
// }

const loginUser = e => {
        e.preventDefault();
        login(username, password)
    }

    return (
            <form onSubmit={loginUser} id="login-form">
                <div className="login-input">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" onChange={handleUsername}/>
                </div>
                <div className="login-input">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={handlePassword}/>
                </div>
                <div className="login-button">
                    <input type="submit" value="Login"/>
                </div>
            </form>
    );
};
export default LoginForm;