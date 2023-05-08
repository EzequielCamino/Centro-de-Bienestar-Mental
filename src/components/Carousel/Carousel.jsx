import Carousel from 'react-bootstrap/Carousel';
import Card3 from '../Card 3/Card 3';
import './Carousel.scss'

function CarouselMobile() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <Card3 specialist="Aillon.jpg" title="Dra. Marcela Aillon" boldtext="Médico psiquiatra"/>
      </Carousel.Item>
      <Carousel.Item>
        <Card3 specialist="Paz.jpg" title="Lic. Gabriela Paz" boldtext="Psicóloga" text="| Psicoterapia individual, de familia, de pareja e infantil."/>
      </Carousel.Item>
      <Carousel.Item>
        <Card3 specialist="Soliz.jpg" title="Lic. Daniela Soliz" boldtext="Psicóloga" text="| Coach especialista en programación neurolingüística. Psicoterapia individual, de familia y de pareja."/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMobile;