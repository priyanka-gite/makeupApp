import React from 'react';
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            Already a use? Please Login!
            ...back to <Link to="/">homepage </Link>
        </div>
    );
};

export default LoginPage;