import React, { useState, useContext } from 'react'
import './LoginPage.css'
import championsImg from '../../assets/UEFA_Champions_League.png'
import { LoginContext } from '../../components/LoginContext';
function LoginPage({ usersData }) {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [Login, setLogin] = useContext(LoginContext);
    const handleAddEmail = (e) => {
        setEmailInput(e.target.value);
    }

    const handlePassword = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLogin = (e, usersData) => {
        e.preventDefault();
        usersData.map((user) => {
            if (user.email === emailInput && user.password === passwordInput) {
                setLogin((true));
                console.log(usersData);
                console.log("Login succeseed!");
            }
        })
        console.log(Login);
    }
    return (
        <div className='LoginPage'>
            <div className='login-container'>
                <img className='img-login' src={championsImg} alt="champions-img" />
                <h1>Vote now!</h1>
                <form onSubmit={(e) => handleLogin(e, usersData)}>
                    <div>
                        <label htmlFor="email">Email:</label><br />
                        <input
                            type="text"
                            id='email'
                            value={emailInput}
                            onChange={handleAddEmail}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <input
                            type='password'
                            id='password'
                            value={passwordInput}
                            onChange={handlePassword}
                        />
                    </div>
                    <div>
                        <button type='submit'>login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage