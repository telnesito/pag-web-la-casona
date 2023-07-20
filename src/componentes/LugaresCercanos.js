import React from 'react'
import { Link } from 'react-router-dom'

const LugaresCercanos = () => {
  return (
    <div id='googleMaps' className='container-lugares-cercanos'>
      <div className='container-text'>
        <h4>QUE TENEMOS CERCA</h4>
        <p className='desc-near'>Estamos ubicados estrategicamente en un zona privilegiada en Puerto Ordaz, con distintos sitios turisticos y centros comerciales a unos pasos. Alojate con nosotros y descubre todo lo que tiene Puerto Ordaz que ofrecer </p>
        <Link style={{ textDecoration: "none" }} to='/home/lugares-cercanos'><button className='lugares-cercanos-btn'>Muestrame!</button></Link>
        <p className='dir'>Hotel La Casona
          Carrera Antillas, Ciudad Guayana 8050, Bolívar</p>
      </div>
      <div className='container-map'>
        <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.499536050232!2d-62.727842111738504!3d8.303166162330708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbfa2b6daebee1%3A0x47447be42e9c8ce2!2sHotel%20La%20Casona!5e0!3m2!1ses-419!2sve!4v1667069424315!5m2!1ses-419!2sve" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default LugaresCercanos