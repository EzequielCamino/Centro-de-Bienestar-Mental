import './Servicios.scss'

import { Button } from 'react-bootstrap';
import React from "react";

function Servicios(){

    return(
        <>
            <div className="heroVector" alt="" />
            <section className="couch">
                <div className="heroText">
                    <h1 className='title'>Te informamos sobre nuestros servicios</h1>
                    <p>Contamos con un equipo de profesionales especializados en el área de salud mental. Podrás encontrar la ayuda necesaria para el cuidado de tu salud mental.</p>
                </div>
                <div className="none"/>
            </section>
            <section className='numberContainer'>
                <div className='square'>
                    <p className='squareNumber'>2900+</p>
                    <p className='squareText'>Consultas realizadas</p>
                </div>
                <div className='circle'>
                </div>
                <div className='square'>
                    <p className='squareNumber'>600+</p>
                    <p className='squareText'>Pacientes dados de alta</p>
                </div>
                <div className='square'>
                    <p className='squareNumber'>800+</p>
                    <p className='squareText'>Pacientes virtuales</p>
                </div>
                <div className='circle2'>
                </div>
                <div className='square'>
                    <p className='squareNumber'>100%</p>
                    <p className='squareText'>Atención en toda Bolivia</p>
                </div>
            </section>
            <section className='servicesContainer'>
                <div className='imgContainer1'>
                    <img className='img1' src="man-sitting-psychologist-s-office-talking-about-problems 1.png" alt="" />
                    <div className='textContainer'>
                    <h1 className='serviceTitle'>Psicología</h1>
                    <ul>
                        <li>Psicoterapia individual</li>
                        <li>Psicoterapia de familia</li>
                        <li>Psicoterapia de pareja</li>
                        <li>Psicoterapia Infantil</li>
                    </ul>
                    <p className='text3'>Nuestro equipo de psicoterapeutas están para ayudarte a resolver tus problemas emocionales y psicológicos!</p> 
                    </div>
                </div>
                <div className='imgContainer2'>
                    <div className='textContainer'>
                    <h1 className='serviceTitle'>Coaching</h1>
                    <ul>
                        <li>Programación neurolingüística</li>
                    </ul>
                    <p className='text3'>Modelo de comunicación que se centra en identificar y usar modelos de pensamiento que influyan sobre el comportamiento de una persona como una manera de mejorar la calidad y la efectividad de la vida.</p>
                    </div>
                    <img className='img1' src="close-up-blurry-people-therapy 1.png" alt="" />
                </div>
                <div className='imgContainer3'>
                    <img className='img1' src="man-talking-therapist 1.png" alt="" />
                    <div className='textContainer'>
                    <h1 className='serviceTitle'>Psiquiatría</h1>
                    <ul>
                        <li>Depresión</li>
                        <li>Ansiedad</li>
                        <li>Crisis de pánico</li>
                        <li>Fobias</li>
                        <li>Esquizofrenia</li>
                        <li>Trastorno bipolar</li>
                        <li>Trastornos en el comportamiento</li>
                        <li>Trastorno de personalidad</li>
                        <li>Anorexia</li>
                        <li>Bulimia</li>
                        <li>TDHA (trastorno por déficit de atención e hiperactividad)</li>
                        <li>TOC (trastorno obsesivo compulsivo)</li>
                        <li>Trastorno de estrés postraumático</li>
                        <li>Alcoholismo</li>
                        <li>Dependencia de drogas</li>
                    </ul>
                    </div>
                </div>
            </section>
            <section className="bannerCita">
                <div className="bannerText">
                    <h1>Tu mente merece atención: comienza a cuidar tu salud mental</h1>
                    <br/><br/>
                    <p>“La salud mental es un estado de bienestar mental que permite a las personas hacer frente a los momentos de estrés de la vida, desarrollar todas sus habilidades, podes aprender y trabajar adecuadamente y contribuir a la mejora de su comunidad.” (OMS)</p>
                    <p>¡Estamos para ayudarte!</p>
                    <Button href="/citas" className="scheduleTextBtn" variant="info">Agenda una cita</Button>
                </div>
                <div className="none"/>
            </section>
        </>
    )
}

export default Servicios;