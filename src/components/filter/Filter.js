import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './Filter.css'
import Button from "../button/Button";
import {brands} from "../../data/brands"

const Filter = () => {
    const[inputValue,setInputValue]= useState("");
    const[inputType, setInputType]= useState("")
    const[minInput, setMinInput]= useState("")
    const[maxInput, setMaxInput]= useState("")
    const navigate = useNavigate();

    const onSubmit = (e) => {
        // e.preventDefault();
        navigate("/productsoverview",{state:{brand:inputValue,product_type:inputType,price_greater_than: minInput,price_less_than:maxInput}
        })
    }
    return (
        <>
            <form className="outer-box" onSubmit={onSubmit}>

                <div className="each-box font">   Filter By: </div>
                <label className="font" htmlFor="brand"></label>
                <select  className="each-box font select-box"
                         name="brand"
                         id="brand"
                         onChange={
                    (e)=> setInputValue(e.target.value)
                }>
                    <option  className="each-box font" >--SELECT--</option>
                    {brands.map((product)=>{
                        return(
                            <option key={product.id} className="each-box font">{product.type}</option>
                        )
                    })
                    }
                </select>
                <br/>
                <label className="font" htmlFor="product_type"></label>
                <br/>
                <input
                    className="each-box font"
                    type="text"
                    name="product_type"
                    id="product_type"
                    placeholder="Blush/mascara/foundation/lipstick"
                    value={inputType}
                    onChange= {(e)=>{
                        setInputType(e.target.value)
                    }}>
                </input>
                <div className="font"></div>
                <label className="font" htmlFor="minPrice"> Min Price:</label>
                <input
                    className="each-box font"
                    type="number"
                    name="minPrice"
                    id="minPrice"
                    placeholder= "0"
                    min="0"
                    value={minInput}
                    onChange= {(e)=>{
                        setMinInput(e.target.value)
                    }}>
                </input>

                <label className="font" htmlFor="maxPrice"> Max Price:</label>
                <input
                    className="each-box font"
                    type="number"
                    name="maxPrice"
                    id="maxPrice"
                    min="0"
                    value={maxInput}
                    onChange= {(e)=>{
                        setMaxInput(e.target.value)
                    }}>
                </input>

                <Button className="btn" type="submit" >Let's Find</Button>
            </form>
        </>
    );
};

export default Filter;