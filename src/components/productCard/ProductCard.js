import React from 'react';
import './ProductCard.css'
import {Link} from "react-router-dom";

const ProductCard = ({product}) => {
    return (
            <section className="product-card-container" >
                <p className="margin link">
                    {product.name}
                </p>
                <img src={product.image_link} alt="products" className="image-resize "/>
                <p className="margin">
                    Price: {product.price}{product.price_sign}
                </p>
                <a href={product.product_link} target="_blank" className="margin link "> SHOP NOW </a>
                {/*<a >*/}
                {/*    {product.product_link}*/}
                {/*</a>*/}
            </section>

        // </div>
    );
};

export default ProductCard;