import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

import { useEffect } from 'react'

import Aos from 'aos'
import "aos/dist/aos.css"



function IndividualIntervalsExample() {
  return (
    <Carousel data-aos='fade-right' className='prob'>
      <Carousel.Item>
        <div className='contenedor-review'>
          <div className='img-rev'>
            <img alt='foto de perfil' loading='lazy' src='https://media-cdn.tripadvisor.com/media/photo-l/02/25/85/16/anmegk.jpg'></img>
          </div>

          <div className='review'>
            <h5>Alen N <br /><span>
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
            </span></h5>
            <p><ImQuotesLeft /> El personal es muy educado y se puede ver cómo dan lo mejor de complacer a sus clientes. El hotel está situado en el barrio de Chilemex, una parte exclusiva de la ciudad, y a dos cuadras de la clínica Chilemex, un hospital privado <ImQuotesRight /></p>
          </div>
        </div>

      </Carousel.Item>
      <Carousel.Item>
        <div className='contenedor-review'>
          <div className='img-rev'>
            <img alt='foto de perfil' loading='lazy' src='https://media-cdn.tripadvisor.com/media/photo-l/08/fb/34/6a/tsunamiarturo.jpg'></img>
          </div>

          <div className='review'>
            <h5>tsunamiarturo<br /><span>
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
            </span></h5>
            <p>
              <ImQuotesLeft /> Excelente Hotel con Ambiente Familiar, la verdad te sientes muy cómodo y como si estuvieras de visita en una casa con muy buenas atenciones, esta bien ubicado y es muy tranquilo <ImQuotesRight />.
            </p>
          </div>
        </div>

      </Carousel.Item>
      <Carousel.Item>
        <div className='contenedor-review'>
          <div className='img-rev'>
            <img alt='foto de perfil' loading='lazy' src='https://media-cdn.tripadvisor.com/media/photo-l/04/47/0a/11/wedelgado.jpg'></img>
          </div>

          <div className='review'>
            <h5>wedelgado<br /><span>
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
            </span></h5>
            <p>
              <ImQuotesLeft /> Ideal para viaje de negocios. Llegué en la madrugada al hotel, sin embargo estaban esperándome en el lobby. A pesar de que la estadía fue muy pero muy corta pude disfrutar del desayuno del hotel <ImQuotesRight />.
            </p>
          </div>
        </div>

      </Carousel.Item>
    </Carousel >
  );
}


const Testimonios = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className='container-tes'>
      <div className='container-testimonios'>
        <IndividualIntervalsExample />
        <div data-aos='fade-right' className='testi-adv'>
          <img alt='logo trip advisor' width="200px" src='/images/home/tripadvisor-emblema.webp'></img>
          <span className='star'>  <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></span>
          <a rel='noreferrer' target="_blank" href='https://www.tripadvisor.es/Hotel_Review-g316072-d2655260-Reviews-Hotel_La_Casona-Ciudad_Bolivar_Guayana_Region.html'>Ver perfil</a>
        </div>
      </div>
      <div className='container-desc'>
        <h2 data-aos='fade-in'>Hotel La Casona</h2>
        <p data-aos='fade-int'>¿Buscas donde alojarte en Ciudad Bolivar? Entonces no te pierdas Hotel La Casona, un hotel pequeño que te acerca a lo mejor de Ciudad Bolivar.
          <br /><br />
          Las habitaciones de Hotel La Casona ofrecen frigorífico y aire acondicionado, y los huéspedes pueden estar conectados con internet.
          <br /><br />
          Además, durante la estancia en Hotel La Casona los huéspedes tienen acceso a conserje. También puedes disfrutar de bar.

          Cuando te entre hambre, no dudes en dirigirte a Bonsai Sushi, que es un restaurante de sushi conocido por residentes y viajeros.
          <br /><br />
          Durante tu visita, no te pierdas museos de historia como Casa del Congreso de Angostura, ya que se llega rápido desde el hotel pequeño.
        </p>
        <a href='#a' id='galeria' className='btn-reservar'>Reserva Ahora</a>
      </div>


    </div>
  )
}

export default Testimonios