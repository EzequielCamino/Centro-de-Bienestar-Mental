import './Navbar.scss';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { NavLink } from "react-router-dom";
import React from "react";

function MyAppNavbar() {
  return (
    <Navbar id="Navbar" bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/" className="navbarBrand"><img src="logo.svg" alt="Dra. Marcela Aillón"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="navbarLinks">
            <Nav.Link>
            <NavLink className="navbarLinksRefs" to="/">Inicio</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink className="navbarLinksRefs" to="/servicios">Servicios</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink className="navbarLinksRefs" to="/contacto">Contacto</NavLink>
            </Nav.Link>
            <Button href="/citas" className="navbarLinksButton" variant="info">
              <NavLink className="navbarLinkButton" to="/citas">
                Agendar cita
                </NavLink> 
              </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyAppNavbar;