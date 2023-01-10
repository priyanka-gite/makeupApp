import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, {Axios} from "axios";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[role, setRole]= useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, username, role, password });
        setEmail("");
        setRole("");
        setUsername("");
        setPassword("");
    };

    const gotoLoginPage = () => navigate("/loginpage");



    async function fetchSigning() {
        const res = await axios.get("https://frontend-educational-backend.herokuapp.com/api/test/all");
        console.log(res);
    }
    fetchSigning();

    return (
        <div >
            <h2>Sign up </h2>
            <form className='signup__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    value={username}
                    minLength={6}
                    minLength={6}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor='role'>Role</label>
                <input
                    type='text'
                    id='role'
                    name='role'
                    value={role}
                    required
                    onChange={(e) => setRole(e.target.value)}
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

                <button className='signupBtn'>SIGN UP</button>
                <p>
                    Already have an account?{" "}
                    <span className='link' onClick={gotoLoginPage}>
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Signup;