import React, { useState } from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        console.log(e.target.value);
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };

    const dispatch = useDispatch();
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
        history.push("/meals");
    };

    return (
            <form id="login-form">
                <div className="login-input">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" onChange={handleUsername}/>
                </div>
                <div className="login-input">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={handlePassword}/>
                </div>
                <div className="login-button">
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </div>
            </form>
    );
};
export default LoginForm;