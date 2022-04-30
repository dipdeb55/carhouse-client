import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const handelUserLogin = e => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password)
    }

    const handlePasswordReset = e => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset successfully')
            })
    }

    if (user) {
        navigate('/')
    }

    return (
        <div>
            <h2>Please Login</h2>
            <Form onSubmit={handelUserLogin} className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                    <p className='text-danger'>{error?.message}</p>
                </Form.Group>
                <Button onClick={handlePasswordReset} className='text-decoration-none' variant="link">Reset Password!</Button>
                <p>Don't have an account <Link className='text-decoration-none ' to='/signup'> SignUp</Link></p>
                <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="primary" type="submit">
                    Log in
                </Button>
            </Form>
        </div>
    );
};

export default Login;