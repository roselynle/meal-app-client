import React from "react";
import { RegisterForm } from "../../components";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="register-container">
                <h1>Register</h1>
                <RegisterForm />
                <Link to="/login" >
                Already have an account?
            </Link>
            </div>
        </>
    );
};

export default Register;
