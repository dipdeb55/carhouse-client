import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/"> <img className='w-25' src={'https://i.ibb.co/2tv1b0H/logo.png'} alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        {
                            user && <>
                                <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                                <Nav.Link as={Link} to="/addCar">Add Cars</Nav.Link>
                                <Nav.Link as={Link} to="/cars/myitems">My items</Nav.Link>
                            </>
                        }

                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

                        {
                            user ?
                                <Button className='text-decoration-none' onClick={handleSignOut} variant="link">SignOut</Button>
                                :
                                <Nav.Link className='text-primary' as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;