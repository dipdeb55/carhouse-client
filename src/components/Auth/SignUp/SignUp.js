import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import signup from '../../../image/signup.jpg'


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleNameBlur = e => {
        setName(e.target.value)
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const handleCreateUser = e => {
        e.preventDefault()

        if (password.length < 6) {
            setError("Password should contain 6 or more character");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/login')
    }

    return (
        <div className="d-flex justify-content-around align-items-center mt-5 mb-5">
            <div>
                <h1>Signup</h1>
                <Form onSubmit={handleCreateUser} className=''>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" onBlur={handleNameBlur} placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" onBlur={handleEmailBlur} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" onBlur={handlePasswordBlur} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {error?.password && <p className="text-danger">{error.password}</p>}
                    </Form.Group>
                    <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                    <p className='text-danger'>{error}</p>
                    <Button variant="primary" onClick={() => createUserWithEmailAndPassword(email, password)} type="submit">
                        SignUp
                    </Button>
                </Form>
            </div>
            <img className="w-25" src={signup} alt="" />
        </div>
    );
};

export default SignUp;