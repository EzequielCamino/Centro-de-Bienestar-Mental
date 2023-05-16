import './Card 3.scss'

import { Button, Card } from "react-bootstrap";

import React from "react";

function Card3({specialist, title, boldtext, text}) {
    return (
        <Card className="card3"/* style={{ width: '18rem' }} */>
            <Card.Img variant="top" src={specialist} />
            <Card.Body className="card3Body">
                <Card.Title className="card3BodyTitle">{title}</Card.Title>
                <Card.Text className="card3text">
                    <b>{boldtext}</b> {text}
                </Card.Text>
            </Card.Body>
                <Button className="card3BodyButton" href="/citas" variant="info">Agendar</Button>
        </Card>

    )
}

export default Card3;