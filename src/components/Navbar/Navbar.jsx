import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Navbar.scss';

function MyAppNavbar() {
  return (
    <Navbar id="Navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="navbarBrand"><img src="logo.svg" alt="Dra. Marcela Aillón"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="navbarLinks">
            <Nav.Link href="/" className="navbarLinksRefs">Inicio</Nav.Link>
            <Nav.Link href="/servicios" className="navbarLinksRefs">Servicios</Nav.Link>
            <Nav.Link href="/contacto" className="navbarLinksRefs">Contacto</Nav.Link>
            <Button href="/citas" className="navbarLinksButton" variant="info">Agendar cita</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyAppNavbar;