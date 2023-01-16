import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const Comparison = (item) => {
    console.log(item)
    const navigate = useNavigate();


    return (

        <>
            <aside>ProductOne</aside>
            <aside>Producttwo</aside>

        <Button onClick={(()=>{
            navigate(-1)
        })} >
          Back
        </Button>

        </>
    );
};

export default Comparison;