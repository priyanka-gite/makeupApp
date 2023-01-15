import React, {useState} from 'react';
import './ProductCard.css'

const ProductCard = ({product, addToCompare,removeFromCompare}) => {
    const [checked,setChecked] = useState()

    const handleChange = (e) => {
        let isChecked = e.target.checked
        isChecked ? addToCompare(product) : removeFromCompare(product);
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
                    <label htmlFor="compare">Compare</label>
                    <input
                        type="checkbox"
                        id="compare"
                        value={checked}
                        onChange={(e)=>handleChange(e)}
                    />
                </div>

            </form>


            {/*{selected && selected.includes(product) ? (*/}
            {/*    <button color="red" onClick={() => removeFromCompare(product)}>*/}
            {/*        Remove*/}
            {/*    </button>*/}
            {/*) : (*/}
            {/*    <button color="blue" onClick={() => addToCompare(product)}>*/}
            {/*        Compare*/}
            {/*    </button>*/}
            {/*)}*/}
        </section>

        // </div>
    );
};

export default ProductCard;