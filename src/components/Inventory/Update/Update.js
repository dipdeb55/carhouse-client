import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { FcInspection } from "react-icons/fc";

const Update = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])



    // const handelDelivered = () => {

    //     // // const newQuantity = quantity - 1;
    //     // const newQuantity = {
    //     //     quantity: car.quantity - 1,
    //     // }
    //     const newQuantity = 


    //     fetch(`http://localhost:5000/cars/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => setQuantity(data))
    // }

    return (
        <div>
            <div className='d-flex justify-content-around align-items-center'>
                <Card className="text-center w-25 mx-auto mt-5">
                    <Card.Img variant="top" src={car.image} />
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <Card.Title>{car.name}</Card.Title>
                            <Card.Title>{car.price}</Card.Title>
                        </div>
                        <Card.Text>
                            {car.description}
                        </Card.Text>
                        <div className='d-flex justify-content-around' >
                            <p>Sold:{car.sold}</p>
                            <p>Available:{car.quantity}</p>
                        </div>
                        <p>Supplier:{car.supplierName}</p>
                        <Button variant="primary">Delivered</Button>
                    </Card.Body>
                </Card>


                <Form className='w-25 mx-auto'>
                    <h3 className='mb-4'>ReStock</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="text" placeholder="Car Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="number" placeholder="Quantity" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <Button className='my-3 mx-3' onClick={() => navigate('/manageInventory')} variant="secondary"> <FcInspection></FcInspection> Manage Inventory</Button>
        </div>
    );
};

export default Update;