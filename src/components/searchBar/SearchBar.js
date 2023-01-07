import React, {useState} from 'react';
import './SearchBar.css'
import {useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [query,setQuery] = useState("");

    const navigate = useNavigate();

    function onFormSubmit  (e) {
        console.log('submitted')
        e.preventDefault();
        // setSearchValueHandler(JSON.parse('{"brand" : "' + query + '"}'))
        navigate("/productsoverview",{state:{brand:query}})
    }
    return (
        // <div  className="search"      >
            <form onSubmit={onFormSubmit} className="search">
                <input
                    type="text"
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