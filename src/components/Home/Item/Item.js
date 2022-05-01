import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ car }) => {
    const { _id, name, image, description, price, quantity, supplierName } = car;
    const navigate = useNavigate();

    return (
        <div className='mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='w-100' src={image} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>{price}</Card.Title>
                    </div>
                    <p>Supplier:{supplierName}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;