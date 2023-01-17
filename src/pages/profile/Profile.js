import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import './Profile.css'

const Profile = () => {
    const {user: {username}} =useContext(AuthContext)

    return (
        <div className="message">
            <h1>Welcome <span>{username}</span></h1>
        </div>
    );
};

export default Profile;