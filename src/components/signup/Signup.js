import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[role, setRole]= useState("user")
    const [error,toggleError] =useState(false)
    const [loading,toggleLoading] =useState(false)
    const navigate = useNavigate();

    async function handleSubmit (e) {

        console.log("user is registered")
        e.preventDefault();
        toggleLoading(true)

       try{ const res = axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup", {email: email ,username: username,role : role ,password : password} )
           toggleError(false)
        console.log(res) }
        catch (error){
           console.error(error)
            toggleError(true)
        }
        toggleLoading(false)
             }

    const gotoLoginPage = () => navigate("/loginpage");



    return (
        <div >
            {
            loading && <span>Please wait while your page is loading</span>
        }
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
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />

                {/*<label htmlFor='role'>Role</label>*/}
                {/*<input*/}
                {/*    type='text'*/}
                {/*    id='role'*/}
                {/*    name='role'*/}
                {/*    value={role}*/}
                {/*    required*/}
                {/*    onChange={(e) => setRole(e.target.value)}*/}
                {/*/>*/}
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

                <button className='signupBtn' type="submit" >SIGN UP</button>
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