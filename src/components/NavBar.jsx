import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'

const logoStyle = {
  width: 100
}
const NavBarMenu = () => {
    return (
        <>  <Navbar bg="light" expand="lg">
        <Container>
          
          <Navbar.Brand href="#home"><img src="LogoPrincipal.png" alt="Logo Buy-Art" style={logoStyle} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Art</Nav.Link>
              <Nav.Link href="#shopping-cart"> <CartWidget/> </Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>  
  

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></>
      
    )
}


export default NavBarMenu;