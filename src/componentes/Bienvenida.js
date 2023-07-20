import { MdHotel, MdRestaurant, MdNetworkWifi, MdInput } from 'react-icons/md'
import React, { useEffect } from 'react'

import Aos from 'aos'
import "aos/dist/aos.css"



const Bienvenida = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div id='servicios' className='contenedor-bienvenida'>
      <h1>Bienvenido a Posada La Casona</h1>
      <p>Nuestro objetivo es ser tu segunda casa en Puerto Ordaz</p>

      <div data-aos='fade-up' className='container-service'>
        <div>
          <MdHotel className='icon-welcome' />
          <p>8 Habitaciones</p>
        </div>
        <div>
          <MdRestaurant className='icon-welcome' />
          <p>Restaurante</p>
        </div>
        <div>
          <MdNetworkWifi className='icon-welcome' />
          <p>Wifi</p>
        </div>
        <div>
          <MdInput className='icon-welcome' />
          <p>Servicio a la habitacion</p>
        </div>
      </div>


    </div >
  )
}

export default Bienvenida