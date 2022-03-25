import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>Weather</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/favorites" >Favorites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavBar