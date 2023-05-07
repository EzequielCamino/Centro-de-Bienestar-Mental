import React from "react";
import { Button } from "react-bootstrap";
import Card1 from "../Card 1/Card 1";
import Card2 from "../Card 2/Card 2";
import Card3 from "../Card 3/Card 3";
import './Home.scss'

function Home() {
    return (
        <>
            <div className="heroVector" alt="" />
            <section className="hero">
                <div className="heroText">
                    <h1>Tu mente merece atención: comienza a cuidar tu salud mental</h1>
                    <p>"La salud mental es un estado de bienestar mental que permite a las personas hacer frente a los momentos de estrés de la vida, desarrollar todas sus habilidades, poder aprender y trabajar adecuadamente y contribuir a la mejora de su comunidad." (OMS).</p>
                    <Button href="/servicios" className="heroTextBtn" variant="info">Conoce nuestros servicios</Button>
                </div>
                <div className="none"/>
            </section>
            <section className="aboutus">
                <h2>Sobre nosotros</h2>
                <p className="aboutusText">Nuestro centro de bienestar de salud mental es un lugar donde las personas pueden encontrar el apoyo y la orientación necesarios para mejorar su salud mental y su bienestar emocional. Contamos con un equipo de profesionales altamente capacitados, que están comprometidos a brindar un enfoque integral de tratamiento a cada uno de nuestros pacientes.</p>
                <div className="aboutusCards">
                    <Card1 cardnum="aboutusCard1" icon="misson.svg" title="Nuestra misión" text="Es brindar a nuestros pacientes la atención y el apoyo necesarios para mejorar su salud mental y su bienestar emocional. Nos comprometemos a ofrecer un enfoque integral de tratamiento, utilizando las últimas técnicas y terapias basadas en la evidencia para ayudar a nuestros pacientes a alcanzar sus metas y vivir una vida plena y satisfactoria."/>
                    <img className="aboutusDecoration" src="aboutusdecoration.svg" alt=""/>
                    <Card1 cardnum="aboutusCard2" icon="vision.svg" title="Nuestra visión" text="Es crear un mundo donde la salud mental sea valorada tanto como la salud física y donde todas las personas tengan acceso a la atención y el apoyo necesarios para cuidar su bienestar emocional. Nos esforzamos por ser líderes en el campo de la salud mental, innovando continuamente y brindando atención de la más alta calidad a nuestros pacientes."/>
                    <span className="circle"/>
                </div>
            </section>
            <section className="services">
                <h2>¿Qué te ofrecemos?</h2>
                <div className="servicesCards">
                    <Card2 icon="therapy.svg" color="card2Color1" title="Ambiente confiable" text="Siéntete seguro y cómodo, al hablar sobre tus emociones, contamos con un ambiente de apoyo y cuidado para tu salud mental."/>
                    <Card2 icon="notepad.svg" color="card2Color2" title="Terapias efectivas" text="Aprenderás habilidades y estrategias efectivas para manejar diferentes problemas emocionales."/>
                    <Card2 icon="medal.svg" color="card2Color3" title="Talento especializado" text="Contamos con un equipo de especialistas que tienen la experiencia necesaria para abordar diferentes tipos de trastornos mentales y psicológicos."/>
                </div>
            </section>
            <section className="specialists">
                <h2>Conoce a nuestros especialistas en salud mental</h2>
                <p className="specialistsText">En nuestro Centro de Bienestar Mental, nuestras especialistas están comprometidas en brindar atención personalizada a nuestros pacientes, trabajando de cerca con ellos para desarrollar planes de tratamiento adaptados a sus necesidades únicas.</p>
                <div className="specialistsCards">
                    <Card3 specialist="Aillon.jpg" title="Dra. Marcela Aillon" boldtext="Médico psiquiatra"/>
                    <Card3 specialist="Paz.jpg" title="Lic. Gabriela Paz" boldtext="Psicóloga" text="| Psicoterapia individual, de familia, de pareja e infantil."/>
                    <Card3 specialist="Soliz.jpg" title="Lic. Daniela Soliz" boldtext="Psicóloga" text="| Coach especialista en programación neurolingüística. Psicoterapia individual, de familia y de pareja."/>
                </div>
            </section>
            <section className="schedule">
                <div className="scheduleText">
                    <h1>Tu salud mental si importa</h1>
                    <h1>¡Comienza a cuidarla hoy mismo!</h1>
                    <br/><br/>
                    <p>Cuidar tu salud mental es tan importante como cuidar la salud física. Una buena salud mental nos permite disfrutar una vida plenamente, mantener relaciones saludables y hacer frente a los desafíos que se nos presentan.</p>
                    <p>¡Estamos para ayudarte!</p>
                    <Button href="/citas" className="scheduleTextBtn" variant="info">Agenda una cita</Button>
                </div>
                <div className="none"/>
            </section>
        </>
    )
}

export default Home;