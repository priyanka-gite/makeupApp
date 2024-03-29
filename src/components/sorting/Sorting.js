import React from 'react';
import "./Sorting.css"

const Sorting = ({setSortOrderHandler}) => {
    function changeAscHandle(e) {
        setSortOrderHandler(e.target.value)
        console.log(e.target.value)
         }
        return (
            <div>
                <label htmlFor="price">Sort by Price: </label>
                <select className="sorting-select-box" name="price" id="price" onChange={changeAscHandle}>
                    <option value="" defaultValue="-">-</option>
                    <option value="asc"> Low to High</option>
                    <option value="dsc"> High to Low</option>
                </select>
            </div>
        );
    };

export default Sorting;