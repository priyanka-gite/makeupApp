import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
    const navigate = useNavigate();

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });
    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        const username = localStorage.getItem('username')
        const email = localStorage.getItem('email')
        console.log(storedToken)
        if (storedToken && username && email) {
            const decodedToken = jwt_decode(storedToken)

            if (Math.floor(Date.now() / 1000) < decodedToken.exp) {
                console.log("De gebruiker is NOG STEEDS ingelogd 🔓")
                setAuth({
                    ...auth,
                    isAuth: true,
                    user: {
                        email: email,
                        username: username
                    },
                    status: "done"
                })
            } else {
                console.log("De token is verlopen")
                localStorage.removeItem('token')
                localStorage.removeItem('username')
                localStorage.removeItem('email')
            }
        } else {
            // als er GEEN token is doen we niks
            setAuth({
                ...auth,
                isAuth: false,
                user: null,
                status: "done"
            })
        }
    }, [])

    function login(data) {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.email);
        // const decodedToken = jwt_decode( data.accessToken);
        // void fetchUserData(jwt, decodedToken.sub, "/profile")
        setAuth({
            ...auth,
            isAuth: true,
            user: {
                email: data.email,
                username: data.username
            },
            status: "done"
        })
        // if (redirect) {
            navigate("/profile")
        // }
        // console.log(response)
    }
    // async function fetchUserData(jwt, id, redirect) {
    //     try {
    //         const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/${id}`, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${jwt}`,
    //                 "Access-Control-Allow-Origin": "*"
    //             }
    //         })
    //         setAuth({
    //             ...auth,
    //             isAuth: true,
    //             user: {
    //                 email: response.data.email,
    //                 id: response.data.id,
    //                 username: response.data.username
    //             },
    //             status: "done"
    //         })
    //         if (redirect) {
    //             navigate(redirect)
    //         }
    //         console.log(response)
    //     } catch (e) {
    //         console.error(e)
    //         setAuth({
    //             ...auth,
    //             status: "done"
    //         })
    //     }
    // }

    function logout() {
        console.log(" user is logged out");
        localStorage.removeItem('token');

        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done"
        })
        navigate("/login")
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;