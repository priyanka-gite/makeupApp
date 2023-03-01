import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import './Profile.css'

const Profile = () => {
    const {user: {username},logout} =useContext(AuthContext)
    function handleLogout () {
        logout();
    }
    return (
        <div className= "position">
            <div className="message">
                <h1>Welcome <span>{username}</span></h1>
            </div>
            <button type = "button"  className="button-logout " onClick={handleLogout}> LOGOUT </button>
        </div>
    );
};

export default Profile;