import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='car-container mt-5'>
            {
                cars.slice(0, 6).map(car => <Item
                    key={cars._id}
                    car={car}
                >
                </Item>)
            }
        </div>
    );
};

export default Items;