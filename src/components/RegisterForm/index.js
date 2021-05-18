import React, { useState }  from 'react';
import "../../App.css";
import { useHistory } from 'react-router-dom'

const RegisterForm = () =>  {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")

    const history = useHistory()

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userData = { username, email, password }
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            }
            const r = await fetch(`http://localhost:5000/register`, options)
            const data = await r.json()
            if (data.err){ throw Error(data.err) }
            login(userData);
            history.push('/meals')
        } catch (err) {
            console.warn(err);
        }
    }

function login(data){
    sessionStorage.setItem('username', data.username);
}

        return (
            <div id="register-form">
                <form onSubmit={handleRegister}>
                    <div className="register-input">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" onChange={handleUsername} />
                    </div>
                    <div className="register-input">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" onChange={handlePassword}/>
                    </div>
                    <div className="register-input">
                        <label htmlFor="email">email:</label>
                        <input type="text" name="email" onChange={handleEmail}/>
                    </div>
                    {/* <div className="register-input">
                        <label htmlFor="password">Confirm Password:</label>
                        <input type="password" name="passwordConfirmation" />
                    </div> */}                  
                    <div className="register-button">
                    <input role="register" type="submit" value="Register"/>
                </div>
                </form>
            </div>
        )
}
export default RegisterForm;