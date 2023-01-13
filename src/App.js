import './App.css';
import Home from "./pages/home/Home";
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import React, {useContext, useState} from "react";
import Announcement from "./components/announcement/Announcement";
import ProductsOverview from "./pages/productsoverview/ProductsOverview";
import LoginPage from "./components/login/LoginPage";
import Signup from "./components/signup/Signup";
import Product from "./pages/product/Product";
import Profile from "./pages/Profile";
import {AuthContext} from "./context/AuthContext";

function App() {

    const {isAuth} = useContext( AuthContext) ;

    return (
        <div className="margin">
            <Announcement/>
            <Navbar/>

            <Routes>
                <Route path= "/" element ={ <Home/>}/> }/>
                <Route path='/signup' element={<Signup />} />
                <Route path= "/productsoverview" element ={<ProductsOverview/>}/>
                <Route path= "/loginpage" element ={ <LoginPage/> }/>
                <Route path= "/profile" element ={isAuth ? <Profile/> : <Navigate to="/"/>}/>
                <Route path= "/productsoverview:product" element ={ <Product/> }/>
            </Routes>

        </div>
    );
}

export default App;
