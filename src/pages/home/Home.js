import React, {useEffect, useState} from 'react';
import Slider from "../../components/slider/Slider";
import brush from '../../../src/assets/icons/brushes.png'
import palete from '../../../src/assets/icons/pallete.png'
import "./Home.css"
const Home = () => {
    return (
        <section>
            <article className="wrapper">
            <img src={brush} alt="brush" className="image-left"/>
                <img src={palete} alt="palete" className="image-right" />
            </article>
                    <Slider />
        </section>
);
};

export default Home;