import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useCars from '../Hooks/useCars/useCars';
import ManageItems from './ManageItems/ManageItems';
import { MdDelete } from "react-icons/md";

const ManageInventory = () => {
    const [cars, setCars] = useCars([]);
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
                                <td><Button className='text-decoration-none' variant="link"> <MdDelete></MdDelete>  Delete</Button></td>
                            </tr>
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;