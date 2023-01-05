import React, {useState} from 'react';
import './SearchBar.css'
import {useNavigate} from "react-router-dom";

const SearchBar = ({setSearchValueHandler}) => {
    const [query,setQuery] = useState("");

    const navigate = useNavigate();

    function onFormSubmit  (e) {
        e.preventDefault();
        setSearchValueHandler(JSON.parse('{"brand" : "' + query + '"}'))
        navigate("/productsoverview", )
    }
    return (
        <div  className="search"      >
        <form onSubmit={onFormSubmit}   >
            <input
                type="text"
                placeholder="Search by Brands..."
                value={query}
                onChange= {(e)=>{
                    setQuery(e.target.value)
                }}
                className="input-box"
            />
            <button className="search-button">
                Search
            </button>
        </form>
        </div>

    );
};

export default SearchBar;