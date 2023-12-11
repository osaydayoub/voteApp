import React, { useState, useContext } from 'react'
import './LoginPage.css'
import championsImg from '../../assets/UEFA_Champions_League.png'
import { LoginContext } from '../../components/Contexts/LoginContext';
import { UserContext } from '../../components/Contexts//UserContext';
import { VoteStatusContext } from '../../components/Contexts/VoteStatusContext';
function LoginPage({ usersData }) {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [Login, setLogin] = useContext(LoginContext);
    const [currentUser, setCurrentUser] = useContext(UserContext);
    const [voteStatus, setVoteStatus] = useContext(VoteStatusContext);
    const [noVote, waitingConfirm, voteConfirmed] = ["noVote", "waiting", "confirm"];


    const handleAddEmail = (e) => {
        setEmailInput(e.target.value);
    }

    const handlePassword = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLogin = (e, usersData) => {
        e.preventDefault();
        for (const user of usersData) {
            if (user.email === emailInput && user.password === passwordInput) {
                setLogin((true));
                setCurrentUser(user);
                if (user.vote) {
                    setVoteStatus(voteConfirmed);
                } else {
                    setVoteStatus(noVote);
                }
                console.log(usersData);
                console.log("Login succeseed!");
                console.log(`user= ${user.email}`);
                break;
            }
        }
        // usersData.map((user) => {
        //     if (user.email === emailInput && user.password === passwordInput) {
        //         setLogin((true));
        //         console.log(usersData);
        //         console.log("Login succeseed!");
        //     }
        // })
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