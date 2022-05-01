import React from 'react';
import Item from '../Home/Item/Item';
import useCars from '../Hooks/useCars/useCars';
import InventoryItem from './InventoryItem/InventoryItem';

const Inventory = () => {
    const [cars, setCars] = useCars([]);

    return (
        <div>
            <h2>Inventory Collection</h2>
            <div className='car-container mt-5'>
                {
                    cars.slice(0, 6).map(car => <InventoryItem
                        key={cars._id}
                        car={car}
                    ></InventoryItem>)
                }
            </div>
        </div>
    );
};

export default Inventory;