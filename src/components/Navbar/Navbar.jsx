import React from "react";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Navbar.scss';

function MyAppNavbar() {
  return (
    <Navbar id="Navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src="logo.svg" alt="Dra. Marcela Aillón"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/servicios">Servicios</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Button href="/cita" className="navbarButton" variant="info">Agendar cita</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyAppNavbar;