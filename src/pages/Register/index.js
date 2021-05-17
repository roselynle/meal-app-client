import React from "react";
import { RegisterForm } from "../../components";

const Register = () => {
    return (
        <>
            <div className="register-container">
                <h1>Register</h1>
                <RegisterForm />
                <a href="http://0.0.0.0:8080/login">Already have an account?</a>
            </div>
        </>
    );
};

export default Register;
