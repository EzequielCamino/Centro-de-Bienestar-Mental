import Card from 'react-bootstrap/Card';
import React from 'react'

const PersonCard = ({img, specialty, name}) => {
  return (
    <Card style={{display:'flex'}}>
      <Card.Body style={{display:'flex' ,flexWrap:'wrap', flexDirection:'row'}}>
      <Card.Img variant="top" src={img} style={{borderRadius:'50%'}}/>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{specialty}</Card.Subtitle>
        <input type="radio" value="1" /> 
      </Card.Body>
    </Card>
  )
}

export default PersonCard