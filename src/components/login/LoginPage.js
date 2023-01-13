import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

 const  {login } =useContext(AuthContext)

    async function handleLogin (e) {
        e.preventDefault();
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`,
                { username: username,
                password : password})
            console.log(response);
            login(response.data.accessToken);
        //    response.data.accessToken
        } catch (e) {
            console.error(e)
        }
    }

    const gotoSignUpPage = () => navigate("/signup");
    return (
        <div >
            <h2>Login </h2>

            <form className='login__form' onSubmit={handleLogin}>
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id="username"
                    name='username'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    minLength={6}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='loginBtn'>SIGN IN</button>
                <p>
                    Don't have an account?{" "}
                    <span className='link' onClick={gotoSignUpPage}>
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;