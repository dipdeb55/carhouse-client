import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { FcInspection } from "react-icons/fc";

const Update = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const navigate = useNavigate();
    // const [quantity, setQuantity] = useState({});
    // const { quantity } = car;

    useEffect(() => {
        fetch(`https://rocky-refuge-71424.herokuapp.com/cars/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    const handleDelivered = () => {

        const newQuantity = parseInt(car.quantity) - 1;
        const stringQuantity = newQuantity.toString()
        const updateQuantity = { ...car, quantity: stringQuantity }

        // console.log(JSON.stringify(updateQuantity))
        // console.log(updateQuantity)

        fetch(`https://rocky-refuge-71424.herokuapp.com/cars/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCar(updateQuantity);
                alert('item delivered')
            })

    }

    const handleRestock = (e) => {
        e.preventDefault()
        const quantityValue = e.target.number.value;
        // const addedQuantity = { stockQuantity }
        const restockQuantity = parseInt(car.quantity) + parseInt(quantityValue);
        const newrestockQuantity = { ...car, quantity: restockQuantity }

        console.log(newrestockQuantity)


        fetch(`https://rocky-refuge-71424.herokuapp.com/cars/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newrestockQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCar(newrestockQuantity)
                alert('another car added')
            })
    }

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
                        <Button onClick={() => handleDelivered(car._id)} variant="primary">Delivered</Button>
                    </Card.Body>
                </Card>

                <Form onSubmit={handleRestock} className='w-25 mx-auto'>
                    <h3 className='mb-4'>ReStock</h3>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" name="number" placeholder="Quantity" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        ReStock
                    </Button>
                </Form>
            </div>
            <Button className='my-3 mx-3' onClick={() => navigate('/manageInventory')} variant="secondary"> <FcInspection></FcInspection> Manage Inventory</Button>
        </div>
    );
};

export default Update;