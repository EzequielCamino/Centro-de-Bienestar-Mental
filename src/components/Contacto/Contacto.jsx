import './Contacto.scss'

import { Button } from 'react-bootstrap'
import React from 'react'

const Contacto = () => {
  return (
    <>
      <div className="heroVectorContacto" alt="" />
      <section className="heroContacto">
        <h2 className='heroContactoTitle'>Contáctanos</h2>
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
            <p>centrodebienestarmental <br /> @outlook.com </p>
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
              <Button href="https://www.instagram.com/dra.marcela.aillon/" target="_blank" className="socialnetworksBtn" variant="info"><img src="instagram.svg" alt="Instagram" /></Button>
              <Button href="https://www.linkedin.com/in/dramarcelaaill%C3%B3n/" target="_blank" className="socialnetworksBtn" variant="info"><img src="linkedin.svg" alt="Linkedin" /></Button>
              <Button href="https://www.facebook.com/DraMarcelaAillon" target="_blank" className="socialnetworksBtn" variant="info"><img src="facebook.svg" alt="Facebook" /></Button>
            </div>
          </div>
        </div>
      </section>
      <section className='contacto'>
        <h2>¡Puedes consultarnos cualquier duda!</h2>
        <p>Rellenando el siguiente formulario, podrás dejarnos tus consultas, dudas o sugerencias</p>
        <div className='contactoConsulta'>
          <iframe title='Centro de Rehabilitación Maps' src="https://www.google.com/maps/embed/v1/place?q=Dra+Marcela+Aillón+-+Centro+de+bienestar+mental,+Calle+15,+La+Paz,+Bolivia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
          <form className='contactoConsultaForm' action="https://formsubmit.co/centrodebienestarmental@outlook.com" method='POST'>
                <label> Nombre completo
                    <input required={true} type="text" name='Nombre Completo'/>
                </label>
                <label> Teléfono
                    <input required={true} type="tel" name='Teléfono'/>
                </label>
                <label> Correo electrónico
                    <input required={true} type="email" name='E-mail'/>
                </label>
                <label> Mensaje
                    <textarea required={true} rows="4" name='Mensaje'></textarea>
                </label>
                <input type="hidden" name="_next" value="http://localhost:3000/contacto"/>
                <input type="hidden" name="_captcha" value="false"/>
                <Button variant='info' type='submit' className='contactoConsultaFormButton'>Enviar mensaje</Button>
            </form>
        </div>
      </section>
    </>
  )
}

export default Contacto