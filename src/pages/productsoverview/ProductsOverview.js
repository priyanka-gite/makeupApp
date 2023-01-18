import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";
import ProductCard from '../../components/productCard/ProductCard'
import './ProductsOverview.css'
import Filter from "../../components/filter/Filter";
import Sorting from "../../components/sorting/Sorting";



const ProductsOverview = ({setItemshandler}) => {

    const [data,setData] = useState({});
    const [sortOrder,setSortOrder] =useState("");
    const [loading,toggleLoading] =useState(false);
    const [selectedItems] = useState([]);


    const controller =  new AbortController();
    const location = useLocation();
    const navigate = useNavigate();

    const addToCompare = (product) => {
        if (selectedItems.length < 2) {
            selectedItems.push(product);
            setItemshandler(selectedItems);
            console.log(selectedItems.length);
            console.log(setItemshandler)
            return true;
        }
        return false;
    }
    const removeFromCompare = (product) => {
        selectedItems.pop(product);
        console.log("removed");
    }
    async function fetchData () {
        console.log("called fetch data");
        toggleLoading(true)
        let queryString = '';
        // if statement here is for the error that location.state is empty. hence it works ahead only when location.state is filled.
        if(location.state) {
            // console.log(location)
            if (location.state.brand) {
                queryString = `brand=${location.state.brand}`;
            }
            if (location.state.product_type) {
                queryString = (queryString.length > 0 ? queryString+'&': '') + `product_type=${location.state.product_type}`;
            }

            if (location.state.price_greater_than) {
                queryString = (queryString.length > 0 ? queryString+'&': '') + `price_greater_than=${location.state.price_greater_than}`;
            }
            if (location.state.price_less_than) {
                queryString = (queryString.length > 0 ? queryString+'&': '') +
                    `price_less_than=${location.state.price_less_than}`;
            }
        }
        toggleLoading(true)
        try {
            const baseUrl = `https://makeup-api.herokuapp.com/api/v1/products.json`;
            let fullUrl = "";
            if (queryString) {
                fullUrl = baseUrl + "?" + queryString;
            }else
            {
                fullUrl = baseUrl;
            }
            const response = await axios.get(fullUrl);
            console.log((response.data));
            setData(response.data);
                    }
        catch (e) {
            console.error(e);
        }
        toggleLoading(false);
    }
    useEffect(()=>{
        void fetchData();
        return function cleanup() {
            controller.abort(); // <--- request annuleren
        }
    },[location])

    function sorting (sorts ) {
        console.log(data);
        setSortOrder(sorts);
        if (sorts=== "asc"){
            data.sort((a,b) => {
                return (a.price > b.price) ?  1 : -1;
            })
        }else if(sorts=== "dsc") {
            data.sort((a, b) => {
                return ((b.price - a.price))
            })
        }
    }
    return (
        <>
            {
               !loading && data.length <= 0 && <span className="message"> No Products Found </span>
            }
            {
                loading && <span className="message">Please wait while your page is loading</span>
            }

            {!loading  && data.length>0 && <div className="outer-container">

                <aside className="left-side">
                    <Filter/>
                </aside>

                <aside className="right-side">
                    <div className="sort">
                        <Sorting setSortOrderHandler={sorting}
                        />
                    </div>

                    { selectedItems ===2 &&
                        <button
                            className="button"
                            type="button"
                            onClick={() => {
                                navigate("/comparison");
                            }
                            }>
                            COMPARE
                        </button>
                    }
                    {
                        Object.keys(data).length > 0 &&
                        <div className="right-side-container">
                            {
                                data.map((product) => {
                                    return (
                                        <div key={`${product.id}`}>
                                            <ProductCard product={product} addToCompare={addToCompare} removeFromCompare={removeFromCompare}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </aside>
            </div>
            }
        </>
    );
};

export default ProductsOverview;