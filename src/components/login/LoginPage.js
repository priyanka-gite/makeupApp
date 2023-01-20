import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import './LoginPage.css'
import Button from "../button/Button";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading,toggleLoading] =useState(false);

    const{login} =useContext(AuthContext);

    async function handleLogin (e) {
        e.preventDefault();
        toggleLoading(true);
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`,
                {username: username,
                    password : password});

            login(response.data);
            //    response.data.accessToken
        } catch (e) {
            console.error(e);
        }
        toggleLoading(false);
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
                        <label htmlFor='username'></label>
                        <input
                            type='text'
                            id="username"
                            name='username'
                            placeholder="username"
                            className="each-box-margin"
                            value={username}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor='password'></label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder="password"
                            className="each-box-margin"
                            minLength={6}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button className="login-btn">SIGN IN</Button>
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