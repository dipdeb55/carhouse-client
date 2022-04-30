import React from 'react';
import Item from '../Home/Item/Item';
import useCars from '../Hooks/useCars/useCars';
import InventoryItem from './InventoryItem/InventoryItem';

const Inventory = () => {
    const [cars, setCars] = useCars([]);

    return (
        <div className='car-container mt-5'>
            {
                cars.map(car => <InventoryItem
                    key={cars._id}
                    car={car}
                ></InventoryItem>)
            }
        </div>
    );
};

export default Inventory;