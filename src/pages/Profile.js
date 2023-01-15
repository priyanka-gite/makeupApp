import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const Profile = () => {
    const {user: {username}} =useContext(AuthContext)

    return (
        <div>
            <p>Welcome <span>{username}</span></p>

        </div>
    );
};

export default Profile;