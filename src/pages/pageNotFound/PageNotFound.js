import React from 'react';
import {Link} from "react-router-dom";
import "./PageNotFound.css"


const PageNotFound = () => {
    return (
        <div className="out-container">
            <h1 className="h1-style">404</h1>
            <h2 className="h2-style">Page not Found</h2>
            <Link to="/" >back to homepage</Link>
        </div>
    );
};

export default PageNotFound;