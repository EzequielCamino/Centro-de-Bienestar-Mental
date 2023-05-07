import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Footer.scss';

function MyAppFooter() {
  return (
    <section className="footer">
        <div className="socialnetworks">
            <Button href="https://www.instagram.com" target="_blank" className="socialnetworksBtn" variant="info"><img src="instagram.svg" alt="Instagram" /></Button>
            <Button href="https://www.linkedin.com" target="_blank" className="socialnetworksBtn" variant="info"><img src="linkedin.svg" alt="Linkedin" /></Button>
            <Button href="https://www.facebook.com" target="_blank" className="socialnetworksBtn" variant="info"><img src="facebook.svg" alt="Facebook" /></Button>
        </div>
        <Link to="/"><img className="footerLogo" src="logo.svg" alt="Dra. Marcela Aillón"/></Link>
        <p className="footerLinks"><Link to="/servicios">Servicios</Link> | <Link to="/contacto">Contacto</Link> | <Link to="/citas">Citas</Link></p>
        <h6>© 2023 - Dra. Marcela Aillón, centro de bienestar mental</h6>
    </section>
  );
}

export default MyAppFooter;