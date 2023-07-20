
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="img1" />
        <Carousel.Caption>
          <div className='container-title'>

            <h3 className='title-hero'>POSADA LA CASONA</h3>
            <p>La posada perfecta para experimentar la vida en Puerto Ordaz!</p>
            <a href='#habitaciones'>Conoce nuestras habitaciones</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img2" />

        <Carousel.Caption>
          <div className='container-title'>
            <h3 className='title-hero'>POSADA LA CASONA</h3>
            <p>Disfrute de una experiencia inolvidable en el corazon de la ciudad!</p>
            <a href='#habitaciones'>Conoce nuestras habitaciones</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img3" />

        <Carousel.Caption>
          <div className='container-title'>

            <h3 className='title-hero'>POSADA LA CASONA</h3>
            <p>Disfrute sus vacaciones o viaje de negocios, alojate con nosotros!</p>
            <a href='#habitaciones'>Conoce nuestras habitaciones</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample