import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import './Footer.scss';

function MyAppFooter() {
  return (
    <section className="footer">
        <div className="socialnetworks">
            <Button href="https://www.instagram.com/dra.marcela.aillon/" target="_blank" className="socialnetworksBtn" variant="info"><img src="instagram.svg" alt="Instagram" /></Button>
            <Button href="https://www.linkedin.com/in/dramarcelaaill%C3%B3n/" target="_blank" className="socialnetworksBtn" variant="info"><img src="linkedin.svg" alt="Linkedin" /></Button>
            <Button href="https://www.facebook.com/DraMarcelaAillon" target="_blank" className="socialnetworksBtn" variant="info"><img src="facebook.svg" alt="Facebook" /></Button>
        </div>
        <Link to="/"><img className="footerLogo" src="logo.svg" alt="Dra. Marcela Aillón"/></Link>
        <p className="footerLinks"> <Nav.Link><Link to="/servicios">Servicios</Link></Nav.Link> | <Nav.Link><Link to="/contacto">Contacto</Link></Nav.Link> | <Nav.Link><Link to="/citas">Citas</Link></Nav.Link></p>
        <h6 className="footerCopyright">© 2023 - Dra. Marcela Aillón, Centro de Bienestar Mental</h6>
    </section>
  );
}

export default MyAppFooter;