import './PersonCard.scss'

import Card from 'react-bootstrap/Card';
import React from 'react'

const PersonCard = ({img, specialty, name, value}) => {
  return (
    <Card className='containerPerson'>
      <Card.Body className='cardPerson'>
      <Card.Img className='imgPerson' variant="top" src={img} />
      <div className='nameContainer'>
        <Card.Title className='textPerson'>{name}</Card.Title>
        <Card.Subtitle id='specialty' className="mb-2 text-muted">{specialty}</Card.Subtitle>
      </div>
        <input className='inputRadio' type="radio" value={value} name='values'/> 
      </Card.Body>
    </Card>
  )
}

export default PersonCard