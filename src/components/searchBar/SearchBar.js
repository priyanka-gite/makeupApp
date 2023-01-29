import React, {useState} from 'react';
import './SearchBar.css'
import {useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';



const SearchBar = () => {
    const [query,setQuery] = useState("");
    const navigate = useNavigate();

    function onFormSubmit  (e) {
        e.preventDefault();
        navigate("/productsoverview",{state:{brand:query}})
    }
    function onSearch(query) {
        console.log("searching products")
    }

    return (
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

            <button className="search-button" onClick={()=>onSearch(query)}>
                SEARCH
            </button>
        </form>
    );
};

export default SearchBar;