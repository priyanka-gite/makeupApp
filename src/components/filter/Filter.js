import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './Filter.css'
import Button from "../button/Button";

const Filter = () => {
    const[inputValue,setInputValue]= useState("");
    const[inputType, setInputType]= useState("")
    const[minInput, setMinInput]= useState(null)
    const[maxInput, setMaxInput]= useState(null)

    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/productsoverview",{state:{brand:inputValue,product_type:inputType,price_greater_than: minInput,price_less_than:maxInput}
        })
        console.log("Lets Find")
    }
    return (
        <>
            <form className="outer-box" onSubmit={onSubmit}>

                <div className="each-box font">   Filter By: </div>
                <label className="font" htmlFor="brand">Brands:</label>
                <br/>
                <input
                    className="each-box font"
                    type="text"
                    name="brand"
                    id="brand"
                    placeholder="Brandnames"
                    value={inputValue}
                    onChange= {(e)=>{
                        setInputValue(e.target.value)
                    }}>
                </input>
                <br/>
                <label className="font" htmlFor="product_type">TYPE:</label>
                <br/>
                <input
                    className="each-box font"
                    type="text"
                    name="product_type"
                    id="product_type"          placeholder="Blush/mascara/foundation/lipsticlk"
                    value={inputType}
                    onChange= {(e)=>{
                        setInputType(e.target.value)
                        console.log(e.target.value)
                    }}>
                </input>
                <div className="font">PRICE:</div>
                <label className="font" htmlFor="minPrice"> Min:</label>
                <input
                    className="each-box font"
                    type="number"
                    name="minPrice"
                    id="minPrice"          placeholder= "0"
                    min="0"
                    value={minInput}
                    onChange= {(e)=>{
                        setMinInput(e.target.value)
                        console.log(minInput)
                    }}>
                </input>

                <label className="font" htmlFor="maxPrice"> Max:</label>
                <input
                    className="each-box font"
                    type="number"
                    name="maxPrice"
                    id="maxPrice"
                    min="0"
                    value={maxInput}
                    onChange= {(e)=>{
                        setMaxInput(e.target.value)
                        console.log(maxInput)}}>
                </input>

                <Button className="btn" type="submit" >Let's Find</Button>
            </form>
        </>
    );
};

export default Filter;