import React, { useState }  from 'react';
import "../../App.css";

const RegisterForm = () =>  {
    const [state , setState] = useState({
        username : "",
        email: "",
        password : "",
        passwordConfirmation : ""
    })

        return (
            <div id="register-form">
                <form>
                    <div className="register-input">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" />
                    </div>
                    <div className="register-input">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="register-input">
                        <label htmlFor="password">Confirm Password:</label>
                        <input type="password" name="passwordConfirmation" />
                    </div>
                    <div className="register-button">
                    <button>Register</button>
                    </div>
                </form>
            </div>
        )
}
export default RegisterForm;