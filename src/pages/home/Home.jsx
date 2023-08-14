import React from 'react';
import Slider from '../../components/slider/Slider';
import Cards from '../../components/cards/Card';

const Home = () => {
    return (
        <div className="page__container">
            <Slider />
            <Cards />
        </div>
    );
};

export default Home;
