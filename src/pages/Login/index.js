import React from "react";
import { LoginForm } from "../../components";
import { NavLink } from "react-router-dom";
import "../../App.css";

const Login = ({login}) => {
    console.log(login)
    return (
        <>
        <div className="login-container">
            <h1>Login</h1>
            <LoginForm login={login}/>
            <NavLink to="/register" >
            <a>Don't have an account yet?</a>
            </NavLink>
            </div>
        </>
    );
};

export default Login;
