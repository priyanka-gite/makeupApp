import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from '../../components/productCard/ProductCard'
import SearchBar from "../../components/searchBar/SearchBar";


const ProductsOverview = ({searchData}) => {
    const [data,setData] = useState({});
    const [inputValue, setInputValue] =useState("");

    const controller =  new AbortController();

    async function fetchData () {

        console.log("called fetch data");
        console.log(searchData.brand);
        // setData({});

        try {
        const baseUrl = `http://makeup-api.herokuapp.com/api/v1/products.json`;
        if(searchData.brand) {
            const response = await axios.get(`${baseUrl}?brand=${searchData.brand}`);
            console.log(response.data)
            setData(response.data);
        }
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
        <>
            This is data
            {

                Object.keys(data).length > 0 &&
                <>
                    <div>
                        {
                            data.map((product) => {
                                return (
                                    <>
                                        <ProductCard product={product}/>
                                    </>
                                )
                            })
                        }
                    </div>
                    <p> ... Back to Homepage</p>
                </>
            }

        </>
    );
};

export default ProductsOverview;