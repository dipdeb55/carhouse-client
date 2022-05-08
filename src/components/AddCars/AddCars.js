import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddCars = () => {
    const [user] = useAuthState(auth);

    const handleAddCars = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const supplierName = e.target.supplierName.value;
        const price = e.target.price.value;
        const sold = e.target.sold.value;
        const quantity = e.target.quantity.value;

        const cars = { name, image, description, supplierName, price, sold, quantity, email };

        fetch('https://rocky-refuge-71424.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cars)
        })
            .then(res => res.json())
            .then(data => {
                alert('Car Add Successful')
                e.target.reset()
            })
    }
    return (
        <div>
            <Form onSubmit={handleAddCars} className='w-25 mx-auto'>
                <h3 className='mb-4'>Adding Cars</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="name" placeholder="Car Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" value={user?.email} name="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="image" placeholder="Image" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="description" placeholder="Description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="supplierName" placeholder="supplierName
                " />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="price" placeholder="price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="sold" placeholder="sold" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" name="quantity" placeholder="Quantity" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddCars;