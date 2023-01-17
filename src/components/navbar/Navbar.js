import React, {useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Navbar.css'
import SearchBar from "../searchBar/SearchBar";
import {AuthContext} from "../../context/AuthContext";
import Button from "../button/Button";


const Navbar = () => {
    const navigate = useNavigate();
    const  {isAuth, logout} = useContext(AuthContext)

    function handleLogout () {
        console.log("handlelogout clicked")
        logout()
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
                            <Button type = "button"  onClick={handleLogout }> Logout </Button>
                            <NavLink to="/profile" className=" menu-right">Profile</NavLink>
                            </>
                            :
                            <>
                                <div className="right">
                                    <NavLink to="/signup" className=" menu-right">SIGNUP</NavLink>
                                    <NavLink to="/login" className=" menu-right">LOGIN</NavLink>
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