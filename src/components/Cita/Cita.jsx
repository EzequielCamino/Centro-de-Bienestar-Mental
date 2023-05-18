import "./Cita.scss";

import { Button, Form } from "react-bootstrap";
import {
  ContenedorBotonCentrado,
  Formulario,
  MensajeError,
  MensajeExito,
} from "../../elementos/Formularios";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../Input/Input";
import PersonCard from "../PersonCard/PersonCard";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

function Citas() {
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true"
    ) {
      cambiarFormularioValido(true);
      cambiarNombre({ campo: "", valido: null });
      cambiarCorreo({ campo: "", valido: null });
      cambiarTelefono({ campo: "", valido: null });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <>
      <section className="formContainer">
        <img className="imgBack" src="sala2.png" alt="" />
        <div className="textContainer">
          <h1>¡Gracias por confiar en nosotros!</h1>
          <p>
            Realiza tu cita con nuestros especialistas en Psiquiatría y
            Psicología desde este formulario. Contamos con las consultas en
            modalidad presencial y virtual. Nos comunicaremos contigo lo antes
            posible para la confirmar de la cita.
          </p>
        </div>
{/*         <form action="https://formsubmit.co/ezeeqii@gmail.com" method="POST">
 */}        <Formulario className="form" action="https://formsubmit.co/ezeeqii@gmail.com" method="POST"/* onSubmit={onSubmit} */>
          <Input
            estado={nombre}
            cambiarEstado={cambiarNombre}
            tipo="text"
            label="Nombre Completo"
            name="Nombre Completo"
            leyendaError="El nombre solo puede contener letras y espacios."
            expresionRegular={expresiones.nombre}
          />
          <Input
            estado={correo}
            cambiarEstado={cambiarCorreo}
            tipo="email"
            label="Correo Electrónico"
            name="E-mail"
            leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
            expresionRegular={expresiones.correo}
          />
          <Input
            estado={telefono}
            cambiarEstado={cambiarTelefono}
            tipo="text"
            label="Teléfono"
            name="Teléfono"
            leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
            expresionRegular={expresiones.telefono}
          />
          <label>
            Seleccione el tipo de sesión
            <select className="selectOption" name="Modalidad">
              <option value="Presencial">Presencial</option>
              <option value="Virtual">Virtual</option>
            </select>
          </label>
          <label>
            Selecciona entre nuestros especialistas
            <div className="specialistContainer">
                <PersonCard  name={"Marcela Aillón"} img={"Aillon.jpg"} specialty={"Psiquiatra"} value={"Marcela Aillón"}/>
                <PersonCard  name={"Daniela Soliz"} img={"Soliz.jpg"} specialty={"Psicóloga"} value={"Daniela Soliz"}/>
                <PersonCard  name={"Gabriela Paz"} img={"Paz.jpg"} specialty={"Psicóloga"} value={"Gabriela Paz"}/>
            </div>
          </label>
          <div>
                <div className="row">
                    <div className="">
                        <Form.Group controlId="week">
                            <Form.Label>Elige en que semana quieres asistir</Form.Label>
                            <Form.Control type="week" name="Semana" min={new Date().toISOString().split('T')[0]} />
                        </Form.Group>
                    </div>
                </div>
            </div>
          {/* {formularioValido === false && (
            <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
            </MensajeError>
          )} */}
          <input type="hidden" name="_next" value="http://localhost:3000/citas"/>
          <input type="hidden" name="_captcha" value="false"/>
          <ContenedorBotonCentrado>
          <Button className="submitButton" type="submit" variant="info">Agendar</Button>
            {/* {formularioValido === true && (
              <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
            )} */}
          </ContenedorBotonCentrado>
          
        </Formulario>
      </section>
    </>
  );
}

export default Citas;
