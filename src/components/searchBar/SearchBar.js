import React, {useState} from 'react';
import './SearchBar.css'
import {useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [query,setQuery] = useState("");
    const navigate = useNavigate();

    function onFormSubmit  (e) {
        console.log('submitted')
        e.preventDefault();//without this page is reloaded and we lose our current state
        navigate("/productsoverview",{state:{brand:query}})
    }
    return (
        // <div  className="search"      >
        <form onSubmit={onFormSubmit} className="search">
            <label form="search-bar"></label>
            <input
                type="text"
                id="search-bar"
                placeholder="Search by Brand"
                value={query}
                onChange= {(e)=>{
                    setQuery(e.target.value)
                }}
                className="input-box"
            />
            <SearchIcon className="icon"/>

            <button className="search-button">
                Search
            </button>
        </form>
        // </div>

    );
};

export default SearchBar;