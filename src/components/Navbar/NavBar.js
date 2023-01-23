import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import CartWidget from './CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {cartContext} from '../CartContext/CartContext'

const NavBar = () => {

    const {totalQuantity} = useContext(cartContext)

    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to={'/'} href="#home">Matias Cobos</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            <Nav.Link><Link to={"category/polo"}>Polo</Link></Nav.Link>
                            <Nav.Link><Link to={"category/jacket"}>Jacket</Link></Nav.Link>
                            <Nav.Link><Link to={"category/pants"}>Pants</Link></Nav.Link>
                            <Nav.Link><Link to={"category/shirt"}>Shirt</Link></Nav.Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget totalQuantity={totalQuantity} />
            </Container>
        </Navbar>
    )
}

export default NavBar