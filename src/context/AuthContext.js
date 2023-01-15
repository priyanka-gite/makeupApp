import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({})

const AuthContextProvider = ({children}) => {
    const [ auth, setAuth ] = useState ({
        isAuth:false,
        user:null
    });
    const navigate = useNavigate()

    function login (jwt,username) {
        console.log("user is logged in")
        localStorage.setItem('token',jwt)
        setAuth({
            isAuth: true,
            user: {
                username:username
            }
        })
        navigate("/profile")
    }
    function logout () {
        console.log(" user is logged out")
        setAuth({
            isAuth: false,
            user: null
        })
    }
    const contextData = {
        isAuth:auth.isAuth,
        user:auth.user,
        login:login,
        logout:logout
    }

    return (
        <AuthContext.Provider value ={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;