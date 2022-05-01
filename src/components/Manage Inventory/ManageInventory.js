import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useCars from '../Hooks/useCars/useCars';
import ManageItems from './ManageItems/ManageItems';
import { MdDelete } from "react-icons/md";

const ManageInventory = () => {
    const [cars, setCars] = useCars([]);

    const handleDelete = id => {
        const proceed = window.confirm('You want to DELETE');
        if (proceed) {
            const url = `http://localhost:5000/cars/${id}`
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

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th><MdDelete></MdDelete></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map(car => {
                            return <tr>
                                <td>1</td>
                                <td>{car.name}</td>
                                <td>{car.price}</td>
                                <td>{car.supplierName}</td>
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