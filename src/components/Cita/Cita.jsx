import './Cita.scss'

import { Button } from "react-bootstrap";
import React from "react";

function Citas(){
    return(
        <>
        <section className="formContainer">
            <img className="imgBack" src="sala.png" alt="" />
            <div className="textContainer">
                <h1>¡Gracias por confiar en nosotros!</h1>
                <p>Realiza tu cita con nuestros especialistas en Psiquiatría y Psicología desde este formulario. Contamos con las consultas en modalidad presencial y virtual. Nos comunicaremos contigo lo antes posible para la confirmar de la cita.</p>
            </div>
            <form className='form' action="">
                <label> Nombre completo
                    <input type="text" />
                </label>
                <label> Teléfono
                    <input type="number" />
                </label>
                <label> Correo electrónico
                    <input type="email" />
                </label> 
                <label> Seleccione el tipo de sesión
                    <select></select>
                </label> 
                <label> Selecciona entre nuestros especialistas

                    <div className='specialistContainer'>
                    <div className='radioContainer'>
                        <div className='personContainer'>
                            <img className='person' src="Aillon.jpg" alt="" />
                        </div>
                    <input type="radio" value="1" checked/> Marcela Aillon
                    <p>Psiquiatra</p>
                    </div>

                    <div className='radioContainer'>
                        <div className='personContainer'>
                            <img className='person' src="Soliz.jpg" alt="" />
                        </div>
                    <input type="radio" value="1" checked/> Marcela Aillon
                    <p>Psiquiatra</p>
                    </div>
                    <div className='radioContainer'>
                        <div className='personContainer'>
                            <img className='person' src="Paz.jpg" alt="" />
                        </div>
                    <input type="radio" value="1" checked/> Marcela Aillon
                    <p>Psiquiatra</p>
                    </div>
                    </div>
                </label> 
                <label> Elige en que semana quieres asistir
                    <input type="date" />
                </label>
                <Button className='submitButton'>Agendar</Button>
            </form>
        </section>
        </>
    )
}

export default Citas;