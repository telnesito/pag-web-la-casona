import React from 'react'
import { BiMap } from 'react-icons/bi'

const ZonaTuristica = () => {
  return (
    <div className='contenedor-turista'>
      <div className='contenedor-cachamay'>
        <i> <BiMap />A 7 minutos de La Casona</i>
        <div className='cachamay'>
        </div>
        <h5>Parque Cachamay</h5>
        <p>El viajero puede pasar el dia en el parque,  que ademas, cuenta con cafeterias y centros de atencion para informar a los turistas</p>
      </div>

      <div className='contenedor-ecomuseo'>
        <i><BiMap />A 30 minutos de La Casona</i>

        <div className='ecomuseo'>
        </div>
        <h5>Ecomuseo Caroní</h5>

        <p>Tiene un área de influencia en La Plaza de Agua y el Parque La Llovizna y el Externo que lo conforma la Cuenca del Río Caroní</p>
      </div>

      <div className='contenedor-llovizna'>
        <i> <BiMap />A 20 minutos de La Casona</i>

        <div className='llovizna'>
        </div>
        <h5>Parque La Llovizna</h5>

        <p>El parque es un sitio ideal para compartir con toda la familia, ya que permite disfutar del contacto con la naturaleza</p>
      </div>
    </div>
  )
}

export default ZonaTuristica