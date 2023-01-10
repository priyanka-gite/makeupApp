import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";
import ProductCard from '../../components/productCard/ProductCard'
import './ProductsOverview.css'

const ProductsOverview = () => {
    const [data,setData] = useState({});
    const controller =  new AbortController();
    const location = useLocation();

    async function fetchData () {
        console.log("called fetch data");
        let queryString = "";
        console.log(location.state.category)
        // if statement here is for the error that location.state is empty. hence it works ahead only when location.state is filled.
        if(location.state) {
            if (location.state.brand) {
                queryString = `brand=${location.state.brand}`;
            }
            console.log(queryString)

            if (location.state.product_type) {
                if (queryString > 0) {
                    queryString = queryString + `&product_type=${location.state.product_type}`;
                    console.log(queryString)
                } else {
                    queryString = `product_type=${location.state.product_type}`
                    console.log(queryString);
                }
            }
        }
        try {
            const baseUrl = `http://makeup-api.herokuapp.com/api/v1/products.json`;
            let fullUrl = "";
            if (queryString) {
                fullUrl = baseUrl + "?" + queryString
                console.log(fullUrl)
            }else
            {
                fullUrl = baseUrl;
                console.log(fullUrl)
            }
            // const response = await axios.get(fullUrl);
            // console.log(response.data)
            // setData(response.data);
        }
        catch (e) {
            console.error(e)
        }
    }
    useEffect(()=>{
        fetchData();
        return function cleanup() {
            // acties die uitgevoerd worden na unmount
            console.log("fetching cleanedUp - Unmounting")
            controller.abort(); // <--- request annuleren
        }
    },[])
    return (
        <div className="outer-container">
            <aside className="left-side">
                <div>FILTER BY:</div>
                <section>BRAND:</section>
                <section>TYPE:</section>
                <section> PRICE:</section>
            </aside>

            <aside className="right-side">
                {
                    Object.keys(data).length > 0 &&
                    < div className="right-side-container">
                        {
                            data.map((product) => {
                                return (
                                    <div key = {`${product.id}` }
                                    >
                                        <ProductCard product={product}/>

                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </aside>
        </div>
    );
};

export default ProductsOverview;