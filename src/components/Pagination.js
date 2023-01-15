import React, {useState} from 'react';


const Pagination = ({productsPerPage, totalProducts}) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            {pageNumbers.map((page,index)=>{
                return (
                    <button key={index}
                            onClick={()=>setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ) })}
        </div>
    );
};

export default Pagination;