import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Signup.css'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[role, setRole]= useState("user");
    const [error,setError] =useState(null);
    const [loading,toggleLoading] =useState(false);
    const [message ,setMessage] =useState("");

    const navigate = useNavigate();
    const controller =  new AbortController();

    async function handleSubmit (e) {
        e.preventDefault();
        toggleLoading(true);
        try{ const res = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup", {email: email ,username: username,role : role ,password : password} )
            console.log(res)
            if(!(res.status === 200)) {
                setError("Failed to Fetch the data")
            }
        }
        catch (err){
            setError(err.response.data.message)
        }
        toggleLoading(false)
    }
    useEffect(()=>{
        void handleSubmit();
        return function cleanup() {
            controller.abort(); // <--- request annuleren
        }
    },[email,username,password,role]);

    const gotoLoginPage = () => navigate("/login");

    // function emailValidation () {

        // const regEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // if (regEx.(email)) {
        //     console.log("Email is Valid")
        //     setMessage("Email is Valid")
        // } else if (!regEx.match(email) && email=== "") {
        //     console.log("Email is not valid")
        //     setMessage("Email is not valid");
        // } else {
        //     setMessage("")
        // }}
    return (
        <div className="outerClass-signup ">
            {
                error &&  <p className="error-message"> {error}</p>
            }
            {
                loading && <span>Please wait while your page is loading</span>
            }

            {!loading &&
                <>
                    <h2>Sign up </h2>

                    <form className="form-class-signup" onSubmit={handleSubmit}>
                        <label htmlFor='email'></label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder="test@gmail.com"
                            className="each-box-margin"
                            value={email}
                            required
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />
                        <label htmlFor='username'></label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder="test"
                            className="each-box-margin"
                            value={username}
                            minLength={6}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor='password'></label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder="******"
                            className="each-box-margin"
                            minLength={6}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="signup-btn" type="submit" >SIGN UP</button>

                        <p>
                            Already have an account?{" "}
                            <span className="link link-signup" onClick={gotoLoginPage}>
                Login
                </span>
                        </p>
                    </form>
                </>
            }
        </div>
    );
};

export default Signup;
//
//                         }