import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import './LoginPage.css'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading,toggleLoading] =useState(false)

    const  {login } =useContext(AuthContext)

    async function handleLogin (e) {
        e.preventDefault();
        toggleLoading(true)
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`,
                { username: username,
                    password : password});

            login(response.data.accessToken,response.data.username);
            //    response.data.accessToken
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
    }

    const gotoSignUpPage = () => navigate("/signup");
    return (
        <div className="outerClass">
            {
                loading && <span>Please wait while your page is loading</span>
            }
            {!loading &&
                <>
                <h2>Login </h2>

                <form className="form-class" onSubmit={handleLogin}>
                    <label htmlFor='username'>Username: </label>
                    <input
                        type='text'
                        id="username"
                        name='username'
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor='password'>Password: </label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        minLength={6}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login-btn">SIGN IN</button>
                    <p>
                        Don't have an account?{" "}
                        <span className='link link-signin' onClick={gotoSignUpPage}>
                        Sign up
                    </span>
                    </p>
                </form>
            </>
            }
        </div>
    );
};

export default Login;