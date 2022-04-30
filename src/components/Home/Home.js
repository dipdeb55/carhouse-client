import React from 'react';
import './Home.css'
import Items from './Items/Items';

const Home = () => {
    return (
        <div>
            <div className='banner-section'>
                <h1 className='right-12' >What are you looking for? </h1>
            </div>
            <Items></Items>
        </div>
    );
};

export default Home;