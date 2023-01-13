import React from 'react';
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>Welcome <span>[username]</span></p>

        </div>
    );
};

export default Profile;