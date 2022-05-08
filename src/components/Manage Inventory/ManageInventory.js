import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useCars from '../Hooks/useCars/useCars';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './ManageInventory.css'

const ManageInventory = () => {
    const [cars, setCars] = useCars([]);
    const navigate = useNavigate();

    const handleDelete = id => {
        const proceed = window.confirm('You want to DELETE');
        if (proceed) {
            const url = `https://rocky-refuge-71424.herokuapp.com/cars/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = cars.filter(car => car._id !== id);
                        setCars(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h2>Manage Inventory</h2>
            <div className='d-flex justify-content-end m-3'>
                <Button variant="secondary" onClick={() => navigate('/addCar')}>Add Car</Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Quantity</th>
                        <th><MdDelete></MdDelete></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map(car => {
                            return <tr>
                                <td><img className='car-img' src={car.image} alt="" /></td>
                                <td>{car.name}</td>
                                <td>{car.price}</td>
                                <td>{car.supplierName}</td>
                                <td>{car.quantity}</td>
                                <td><Button onClick={() => handleDelete(car._id)} className='text-decoration-none' variant="link"> <MdDelete></MdDelete>  Delete</Button></td>
                            </tr>
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;