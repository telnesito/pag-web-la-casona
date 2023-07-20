import { BsCircleFill, BsCircleHalf, BsCircle } from 'react-icons/bs'
import { HeaderPage } from './HeaderPage'
const Lugares = () => {
  return (
    <div className='container-atracciones-cercanas'>
      <HeaderPage nombrePagina='Atracciones cercanas' direccion='Lugares cercanos' />

      <div className='container-lugares'>
        <div className='container-medico' id='min'>
          <h4>Centro medico</h4>
          <p>Clinica Chilemex</p>
          <p>A 0.8km de La Casona</p>
          <span>
            <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill />
          </span>
          <hr></hr>
          <p>Centro avanzado de cirugía AVANZA</p>
          <p>A 0.8km de La Casona</p>
          <span>
            <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircle />
          </span>
        </div>
        <div className='container-medico'>
          <h4>Restaurante</h4>
          <p>La Posada de Chiquito</p>
          <p>A 2 km de La Casona</p>
          <span><BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleHalf /></span>
          <hr></hr>
          <p>L'Gourmet Casa de Te</p>
          <p>A 19 minutos caminando</p>
          <span><BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleHalf /></span>
          <hr></hr>
          <p>El Churrasco</p>
          <p>A 1.9 km de La Casona</p>
          <span><BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleHalf /></span>
          <hr></hr>
          <p>Tomasa Restaurant</p>
          <p>A 1.9 km de La Casona</p>
          <span>
            <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircle />
          </span>
        </div>
        <div className='container-medico'>
          <h4>Atracciones</h4>
          <p>Parque La Llovizna</p>
          <p>A 8.2 km de La Casona</p>
          <span><BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleHalf /></span>
          <hr></hr>
          <p>Orinokia Mall</p>
          <p>A 5.4 km de La Casona</p>
          <span>
            <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircle />
          </span>
          <hr></hr>
          <p>Parque Cachamay</p>
          <p>A 9.4 km de La Casona</p>
          <span>
            <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircle />
          </span>
          <hr></hr>
          <p>Centro Comercial Costa America</p>
          <p>A 0.8 km de La Casona</p>
          <span>
            <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill /> <BsCircleFill />
          </span>

        </div>
      </div>

    </div >
  )
}

export default Lugares