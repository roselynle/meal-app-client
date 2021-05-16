import React, { useState } from "react";
// import { useDispatch } from "react-redux";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const dispatch = useDispatch();

    const handleUsername = (e) => {
        console.log(e.target.value);
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    };

    return (
        <div id="login-form">
            <form onSubmit={handleSubmit}>
                <div className="loginInput">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={handleUsername}/>
                </div>
                <div className="loginInput">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handlePassword}/>
                </div>
                <div className="loginInput">
                    <input id="submit-btn" type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};
export default LoginForm;
