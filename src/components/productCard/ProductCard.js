import React, {useState} from 'react';
import './ProductCard.css'

const ProductCard = ({product, addToCompare,removeFromCompare}) => {

    const handleChange = (e) => {
        let isChecked = e.target.checked
        if(isChecked) {
           if( addToCompare(product)=== false) {
            e.target.checked = false
           }
        } else {
            removeFromCompare(product);
        }
    };

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

            <form>
                <div>
                    <label className="font compare-check" htmlFor="compare">Compare</label>
                    <input
                        type="checkbox"
                        id="compare"
                        onChange={(e)=>handleChange(e)}
                    />
                </div>

            </form>
        </section>
    );
};

export default ProductCard;