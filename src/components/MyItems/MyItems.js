import axios from 'axios';
import './Myitems.css';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useCars from '../Hooks/useCars/useCars';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [cars, setCars] = useState([])

    useEffect(() => {
        const email = user?.email;
        fetch(`http://localhost:5000/cars/myitems?email=${email}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [user])

    if (user) {
        console.log(user)
    }
    return (
        <div>
            <h2>Your Cars</h2>
            <h3>Total:{cars.length}</h3>
            <div className='card-container'>
                {
                    cars.map(car => <Card className='mx-auto' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={car.image} />
                        <Card.Body>
                            <Card.Title>{car.name}</Card.Title>
                            <Card.Text>
                                {car.description}
                            </Card.Text>
                            <Button variant="primary">Delete</Button>
                        </Card.Body>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default MyItems;