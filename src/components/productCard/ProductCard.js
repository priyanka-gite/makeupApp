import React from 'react';
import './ProductCard.css'
import {Link} from "react-router-dom";

const ProductCard = ({product}) => {
    return (
        <div className="products-container">
            <section className="product-card-container" >
                <img src={product.image_link} alt="products" className="image-resize "/>
                <p className="margin">
                    {product.name}
                </p>
                <p className="margin">
                    Price: {product.price}{product.price_sign}
                </p>
                <p> Shop: </p>
                <a href={product.product_link} className="margin link">
                    {product.product_link}
                </a>
            </section>

        </div>
    );
};

export default ProductCard;