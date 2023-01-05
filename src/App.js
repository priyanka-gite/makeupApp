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

function App() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("")
    return (
        <div >
            <Announcement/>
            <Navbar/>
            <SearchBar setSearchValueHandler = {setSearchValue} />
            {/*{searchInputValue ? navigate("/productsoverview") : <></>}*/}
            <Routes>
                <Route path= "/" element ={ <Home/> }/>
                <Route path= "/productsoverview" element ={ <ProductsOverview searchData= {searchValue}/> }/>
                <Route path= "/loginpage" element ={ <LoginPage/> }/>
                <Route path= "/registerationpage" element ={ <RegisterationPage/> }/>
            </Routes>
        </div>
    );
}

export default App;
