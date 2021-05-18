import React from "react";
import { RegisterForm } from "../../components";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="register-container">
                <h1>Register</h1>
                <RegisterForm />
                <NavLink to="/login" >
                <a>Already have an account?</a>
            </NavLink>
            </div>
        </>
    );
};

export default Register;
