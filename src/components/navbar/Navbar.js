import React, {useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Navbar.css'
import SearchBar from "../searchBar/SearchBar";
import {AuthContext} from "../../context/AuthContext";


const Navbar = () => {
    const navigate = useNavigate();
    const  {isAuth, logout} = useContext(AuthContext)
    function handleLogout () {
        logout ()
    }

    return (
        <>
            <nav className= "navbar-main-container">
                <div className= "middle">
                    <SearchBar/>
                    <p className="center" onClick={(()=>{
                        navigate("/")
                    })}><span className="name">BE </span>You.</p>
                    <div>
                        { isAuth ?
                            <>
                            <button type = "button" onClick={ handleLogout}> Logout </button>
                            <NavLink to="/profile" className=" menu-right">Profile</NavLink>
                            </>
                            :
                            <>
                                <div className="right">
                                    <NavLink to="/signup" className=" menu-right">SIGNUP</NavLink>
                                    <NavLink to="/loginpage" className=" menu-right">LOGIN</NavLink>
                                </div>
                            </>
                        }
                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;