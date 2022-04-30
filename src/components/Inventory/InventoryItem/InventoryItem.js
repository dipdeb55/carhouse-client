import React from 'react';
import { Button, Card } from 'react-bootstrap';

const InventoryItem = ({ car }) => {
    const { name, image, description, price, quantity, supplierName } = car;
    return (
        <div className='mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='w-100' src={image} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>{price}</Card.Title>
                    </div>
                    <Card.Title>Supplier: {supplierName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Button variant="primary" >Delivered</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InventoryItem;