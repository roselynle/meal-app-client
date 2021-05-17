import React from "react";
import { LoginForm } from "../../components";

const Login = () => {
    return (
        <>
        <div className="login-container">
            <h1>Login</h1>
            <LoginForm/>
            <a href="http://0.0.0.0:8080/register">
            Don't have an account yet?
            </a>
            </div>
        </>
    );
};

export default Login;
