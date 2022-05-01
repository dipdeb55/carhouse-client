import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import Items from './Items/Items';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='banner-section'>
                <h1 className='right-12' >What are you looking for? </h1>
            </div>
            <Items></Items>
            <Button className='my-3 d-flex justify-content-around mx-3' onClick={() => navigate('/manageInventory')} variant="secondary">Manage Inventory</Button>
        </div>
    );
};

export default Home;