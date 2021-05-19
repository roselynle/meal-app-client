import React from "react";
import { LoginForm } from "../../components";
import { Link } from "react-router-dom";
import "../../App.css";

const Login = ({login}) => {
    return (
        <>
        <div className="login-container">
            <h1>Login</h1>
            <LoginForm login={login}/>
            <Link to="/register" >
            Don't have an account yet?
            </Link>
            </div>
        </>
    );
};

export default Login;
