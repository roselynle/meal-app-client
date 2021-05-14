import React, { useState }  from 'react';

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
                    <div className="registerInput">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" />
                    </div>
                    <div className="registerInput">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="registerInput">
                        <label htmlFor="password">Confirm Your Password:</label>
                        <input type="password" name="passwordConfirmation" />
                    </div>
                    <div className="registerInput">
                        <input id="submit-btn" type="submit" value="Register" />
                    </div>
                </form>
            </div>
        )
}
export default RegisterForm;