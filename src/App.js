import './App.css';
import Home from "./pages/home/Home";
import {Navigate, Route, Routes} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import React, {useContext, useState} from "react";
import Announcement from "./components/announcement/Announcement";
import ProductsOverview from "./pages/productsoverview/ProductsOverview";
import LoginPage from "./pages/login/LoginPage";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/profile/Profile";
import {AuthContext} from "./context/AuthContext";
import Footer from "./components/footer/Footer";
import Comparison from "./pages/comparison/Comparison";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {
const[item,setItems] = useState([]);
    const {isAuth} = useContext( AuthContext) ;
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Routes>
                <Route path= "/" element ={ <Home/>}/> }/>
                <Route path='/signup' element={<Signup />} />
                <Route path= "/productsoverview" element = <ProductsOverview
                setItemshandler={setItems}/>/>
                <Route path= "/login" element ={ <LoginPage/> }/>
                <Route path= "/profile" element ={isAuth ? <Profile/> : <Navigate to="/"/>}/>
                <Route path= "/comparison" element ={ <Comparison itemsHandler={item}/> }/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
