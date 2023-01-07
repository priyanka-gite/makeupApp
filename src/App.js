import './App.css';
import Home from "./pages/home/Home";
import {Route, Routes, useNavigate} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import React, {useState} from "react";
import Announcement from "./components/announcement/Announcement";
import ProductsOverview from "./pages/productsoverview/ProductsOverview";
import SearchBar from "./components/searchBar/SearchBar";
import LoginPage from "./pages/login/LoginPage";
import RegisterationPage from "./pages/registration/RegisterationPage";
import Footer from "./components/footer/Footer"
import Product from "./pages/product/Product";

function App() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("")

    return (
        <div >
            <Announcement/>
            <Navbar/>
            <SearchBar />
            <Routes>
                <Route path= "/" element ={ <Home/>}/> }/>
                <Route path= "/productsoverview" element ={<ProductsOverview/>}/>
                <Route path= "productsoverview/:product" element ={ <Product/> }/>
                <Route path= "/loginpage" element ={ <LoginPage/> }/>
                <Route path= "/registerationpage" element ={ <RegisterationPage/> }/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
