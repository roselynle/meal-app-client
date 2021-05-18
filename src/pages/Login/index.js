import React from "react";
import { LoginForm } from "../../components";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>
        <div className="login-container">
            <h1>Login</h1>
            <LoginForm/>
            <NavLink to="/register" >
            <a>Don't have an account yet?</a>
            </NavLink>
            </div>
        </>
    );
};

export default Login;
