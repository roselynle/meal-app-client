import React, { useState }  from 'react';

const LoginForm = () =>  {
    const [state , setState] = useState({
        username : "",
        password : ""
    })
        return (
            <div id="login-form">
                <form>
                    <div className="loginInput">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" />
                    </div>
                    <div className="loginInput">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="loginInput">
                        <input id="submit-btn" type="submit" value="Login" />
                    </div>
                </form>
            </div>
        )
}
export default LoginForm;