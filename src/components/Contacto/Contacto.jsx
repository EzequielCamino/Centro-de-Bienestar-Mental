import React from 'react'
import './Contacto.scss'
import { Button } from 'react-bootstrap'

const Contacto = () => {
  return (
    <>
      <div className="heroVector" alt="" />
      <section className="heroContacto">
        <h1 className='heroContactoTitle'>Contáctanos</h1>
        <div className='heroContactoCards'>
          <div className='heroContactoCard'>
            <img src="mapubication.svg" alt="map" />
            <h3>Ubícanos en</h3>
            <p>Calacoto, Calle 15, Edificio Plaza 15, Piso 6, Of. 6E., La Paz, Bolivia</p>
          </div>
          <div className='heroContactoCard'>
            <div className='heroContactoCardImgs'>
              <img src="telephone.svg" alt="telephone" />
              <img src="mail.svg" alt="mail" />
            </div>
            <h3>Comunícate al</h3>
            <p>+59 1 767 - 42631</p>
            <h3 className='heroContactoCardSecondaryh3'>Escríbenos a</h3>
            <p>xxxxx@gmail.com</p>
          </div>
          <div className='heroContactoCard'>
            <img src="clock.svg" alt="clock" />
            <h3>Nuestro horario</h3>
            <p>De Lunes a viernes</p>
            <p>9:00 a 12:00hrs<br/>15:00 a 19:00hrs</p>
          </div>
          <div className='heroContactoCard'>
          <img src="phone.svg" alt="phone" />
            <h3>Síguenos en</h3>
            <p>Todas nuestras redes sociales</p>
            <div className="socialnetworks">
              <Button href="https://www.instagram.com" target="_blank" className="socialnetworksBtn" variant="info"><img src="instagram.svg" alt="Instagram" /></Button>
              <Button href="https://www.linkedin.com" target="_blank" className="socialnetworksBtn" variant="info"><img src="linkedin.svg" alt="Linkedin" /></Button>
              <Button href="https://www.facebook.com" target="_blank" className="socialnetworksBtn" variant="info"><img src="facebook.svg" alt="Facebook" /></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto