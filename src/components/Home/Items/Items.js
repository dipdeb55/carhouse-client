import useCars from '../../Hooks/useCars/useCars';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [cars, setCars] = useCars([]);

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