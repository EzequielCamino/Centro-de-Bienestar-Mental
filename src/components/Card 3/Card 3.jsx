import React from "react";
import { Button, Card } from "react-bootstrap";
import './Card 3.scss'

function Card3({specialist, title, boldtext, text}) {
    return (
        <Card className="card3"/* style={{ width: '18rem' }} */>
            <Card.Img variant="top" src={specialist} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <b>{boldtext}</b> {text}
                </Card.Text>
                <Button href="/citas" variant="info">Agendar</Button>
            </Card.Body>
        </Card>

    )
}

export default Card3;