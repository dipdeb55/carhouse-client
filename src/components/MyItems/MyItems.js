import './Myitems.css';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { MdDelete } from "react-icons/md";


const MyItems = () => {
    const [user] = useAuthState(auth)
    const [cars, setCars] = useState([])

    useEffect(() => {
        const email = user?.email;
        fetch(`https://rocky-refuge-71424.herokuapp.com/cars/myitems?email=${email}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [user])

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
                            <Button onClick={() => handleDelete(car._id)} className='text-decoration-none' variant="primary"> <MdDelete></MdDelete>  Delete</Button>
                        </Card.Body>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default MyItems;