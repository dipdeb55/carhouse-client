import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import Items from './Items/Items';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='banner-section d-flex fw-bold'>
                <h1 className='' >CARHOUSE </h1>
                <h1>All types of cars</h1>
            </div>

            <div id='services-container' className='d-flex justify-content-around align-items-center p-3 mt-5 mb-5'>
                <div>
                    <h5>Best Service</h5>
                    <img className='w-25' src={'https://i.ibb.co/znP8D0B/hand-tools-category-item.png'} alt="" />
                    <p>We ensure you to get best service from us.</p>
                </div>
                <div>
                    <h5>Cars We have</h5>
                    <img className='w-25' src={'https://i.ibb.co/XSyc9R2/1076744.png'} alt="" />
                    <p>In our warehouse we have more than 300 cars.</p>
                </div>
                <div>
                    <h5>Finance your car</h5>
                    <img className='w-25' src={'https://i.ibb.co/QJFn6vq/transport-car-icon-6.png'} alt="" />
                    <p>Use our online finance calculators to get a quote.</p>
                </div>
            </div>

            <Items></Items>
            <Button className='my-3 d-flex justify-content-center mx-3' onClick={() => navigate('/manageInventory')} variant="secondary">Manage Inventory</Button>


            <div className='d-flex justify-content-center align-items-center mt-5'>
                <div>
                    <h2 className='text-nowrap fw-bold ms-3 mb-2'>Exchange your car parts</h2>
                    <p><small className='ms-3 '>Sell your vehicles hassle free today. Simply enter your registration number to get started - We also don't charge Admin fees like other dealers!</small></p>
                    <div class="input-group mb-3 ms-3">
                        <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-secondary" type="button" placeholder="Enter your id" id="button-addon2">Register</button>
                    </div>
                </div>
                <div>
                    <img className='w-50 ms-0' src={"https://i.ibb.co/W36pp99/Background-2.png"} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;