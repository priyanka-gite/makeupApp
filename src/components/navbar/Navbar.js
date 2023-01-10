import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Navbar.css'
import ProductsOverview from "../../pages/productsoverview/ProductsOverview";
import Signup from "../signup/Signup";
import LoginPage from "../login/LoginPage";
import SearchBar from "../searchBar/SearchBar";


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className= "navbar-main-container">
                <div className= "middle">
                    <SearchBar/>
                    {/*<NavLink*/}
                    {/*    to = "/productsoverview"*/}
                    {/*    className="middle"*/}
                    {/*>*/}
                    {/*ALL PRODUCTS*/}
                    {/*</NavLink>*/}

                    <p className="center" onClick={(()=>{
                        navigate("/")
                    })}><span className="name">BE </span>You.</p>

                    <div className="right">
                        <NavLink to ="/signup" className=" menu-right">SIGNUP</NavLink>
                        <NavLink to ="/loginpage" className=" menu-right">LOGIN</NavLink>
                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;