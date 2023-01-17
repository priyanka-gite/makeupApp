import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {

    const [ auth, setAuth ] = useState ({
        isAuth:false,
        user:null
    });
    const navigate = useNavigate();

    function login (jwt,username) {

        localStorage.setItem('token',jwt);

        const decodedToken = jwt_decode(jwt);
        console.log(decodedToken);

        // async function fetchUserData () {
            // try{
            //     const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,{
            //         headers: {
            //         "Content-Type": "application/json",
            //             "Authorization": `Bearer ${jwt}`,
            //     }
            //     })
                setAuth({
                    isAuth: true,
                    user: {
                        username:username
                    }
                })
                navigate("/profile");
                // console.log(response)
            // }

            // catch (e) {
            //     console.error(e)
            // }
        }
        // fetchUserData();
    // }
    function logout () {
        console.log(" user is logged out");
        localStorage.removeItem('token');

        setAuth({
            isAuth: false,
            user: null
        })
        navigate("/login")
    }
    const contextData = {
        isAuth:auth.isAuth,
        user:auth.user,
        login:login,
        logout:logout
    };

    return (
        <AuthContext.Provider value ={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;