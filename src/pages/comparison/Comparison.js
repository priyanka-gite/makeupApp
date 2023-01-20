import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './Comparison.css'
import Button from "../../components/button/Button";

const Comparison = ({itemsHandler}) => {
    console.log(itemsHandler)
    const navigate = useNavigate();
    return (
        <>
            {
                <div className="main-box">
                    < div className="compare-outer-box" >
                        {
                            itemsHandler.map((product) => {
                                return (
                                    <div className="product" key={`${product.id}`}
                                    >
                                        <p className="margin link">
                                            {product.name}
                                        </p>
                                        <img src={product.image_link} alt="products" className="image-resize"/>
                                        <p className="margin">
                                            Price: {product.price}{product.price_sign}
                                        </p>
                                        <a href={product.product_link} target="_blank" className="margin link " > SHOP NOW </a>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <button className="btn" onClick={(() => {
                        navigate(-1);
                    })}>
                        Back
                    </button>
                </div>
            }

        </>
    );
};

export default Comparison;