import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const AppHeader = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <img src="" alt="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader