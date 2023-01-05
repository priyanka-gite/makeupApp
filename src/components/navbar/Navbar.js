import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Navbar.css'
import ProductsOverview from "../../pages/productsoverview/ProductsOverview";
import RegisterationPage from "../../pages/registration/RegisterationPage";
import LoginPage from "../../pages/login/LoginPage";
import SearchBar from "../searchBar/SearchBar";


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className= "navbar-main-container">
                <div className= "nav-outer-box">
                    {/*<li className= "search-container search-container-flex left">*/}
                    {/*    INPUT*/}
                    {/*</li>*/}
                    <NavLink to="/productsoverview" className="middle" > All Brands</NavLink>

                    <p className="center" onClick={(()=>{
                        navigate("/", )
                    })}>The Makeup App.</p>

                    <div className="right">
                        <NavLink to ="/registerationpage" className=" menu-right">REGISTER</NavLink>
                        <NavLink to ="/loginpage" className=" menu-right">SIGN IN</NavLink>
                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;