import React from 'react'
import { BsPinMap } from 'react-icons/bs'
import { MdAir } from 'react-icons/md'
import { IoFastFoodOutline } from 'react-icons/io5'
import { BiPulse } from 'react-icons/bi'

const Servicios = () => {

  return (
    <div className='contenedor-service'>
      <div>
        <h5> <BsPinMap /> Zona segura</h5>
        <p>Estamos ubicados en una zona privilegiada de Puerto Orda. Contamos con estacionamiento privado para todos los huespedes y circuito de camaras en toda la Posada</p>

        <a href='#1'>Muestrame</a>
      </div>

      <div>
        <h5> <MdAir /> Servicios basicos</h5>
        <p>En todas nuestras habitaciones contara con Red Wifi gratuita, aire acondicionado, agua caliente y servicio a la habitacion</p>
        <a href='#1'>Conoce nuestras habitaciones</a>

      </div>

      <div>
        <h5> <IoFastFoodOutline /> Servicio de comida y bebida</h5>
        <p>Contamos con servicio a la habitacion de comida y bebidas alcoholicas certificadas. Ademas ofrecemos una amplia lista de restaurantes con delivery a la posada</p>
        <a href='#1'>Reservar ahora</a>

      </div>

      <div>
        <h5> <BiPulse /> Ubicacion estrategica</h5>
        <p>Nos encontramos ubicados a la cercania de centro comerciales, restaurantes, discoteca, clinicas y sitios turisticos. Ademas contamos con una amplia zona para eventos</p>
        <a href='#1'>Google Maps</a>
      </div>
    </div>
  )
}

export default Servicios