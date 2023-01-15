import React, {useState} from 'react';
import Product from "../pages/product/Product";
import ProductCard from "./productCard/ProductCard";
import ProductsOverview from "../pages/productsoverview/ProductsOverview";

const Comparison = ({product}) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const addToCompare = (item) => {
        setSelectedItems((selectedItems) => [...selectedItems, item])
    }
    const removeFromCompare = (item) => {
        const filteredItems = selectedItems.filter(product => product.id !== item.id)
        setSelectedItems(filteredItems)
    }
    return (
        <div>
            <ProductCard product={product}
                         selected={selectedItems}
                         addToCompare={addToCompare}
                         removeFromCompare={removeFromCompare}/>
        </div>
    );
};

export default Comparison;