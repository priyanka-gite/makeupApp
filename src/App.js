import './App.css';
import Home from "./pages/home/Home";
import {Route, Routes, useNavigate} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import React, {useState} from "react";
import Announcement from "./components/announcement/Announcement";
import ProductsOverview from "./pages/productsoverview/ProductsOverview";
import LoginPage from "./components/login/LoginPage";
import Signup from "./components/signup/Signup";
import Footer from "./components/footer/Footer"
import Product from "./pages/product/Product";

function App() {
    return (
        <div >
            <Announcement/>
            <Navbar/>

            <Routes>
                <Route path= "/" element ={ <Home/>}/> }/>
                <Route path='/signup' element={<Signup />} />
                <Route path= "/productsoverview" element ={<ProductsOverview/>}/>
                <Route path= "/loginpage" element ={ <LoginPage/> }/>
                <Route path= "/productsoverview:product" element ={ <Product/> }/>
            </Routes>

        </div>
    );
}

export default App;
