import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({})

const AuthContextProvider = ({children}) => {
    const [ auth, setAuth ] = useState ({
        isAuth:false,
        user:null
    });
    const navigate = useNavigate()

    function login (jwt) {
        console.log("user is logged in")
        console.log(jwt)
        setAuth({
            isAuth: true,
            user: {
             email:email,

            }
        })
        navigate("/profile")
    }
    function logout () {
        console.log(" user is logged out")
        setIsAuth(false)
    }
    const contextData = {
        isAuth:isAuth,
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