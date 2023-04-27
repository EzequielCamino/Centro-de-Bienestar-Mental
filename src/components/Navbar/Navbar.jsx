import React from "react";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Navbar.scss';

function MyAppNavbar() {
  return (
    <Navbar id="Navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h1>LOGO</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Conócenos</Nav.Link>
            <Nav.Link href="#link">Servicios</Nav.Link>
            <Nav.Link href="#link">Especialistas</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Button variant="dark">Agendar cita</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyAppNavbar;