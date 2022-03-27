import { Button } from 'react-bootstrap'
import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCelsiusAction } from '../redux/reducer'

const NavBar = () => {
    const dispatch = useDispatch()
    const celsius =useSelector(state => state.celsius)

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Weather</Navbar.Brand>
                <Button className="mr-3" variant="primary" 
                 onClick={()=> dispatch(setCelsiusAction(!celsius))}>{celsius? "Fahrenheit":" Celsius "}</Button>
                <Nav className="justify-content-end">
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/favorites" >Favorites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavBar