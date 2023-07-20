import '../App.css'

import React from 'react'
import { FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MenuNav = () => {

  return (
    <div id='container-menu' className='container-menu'>

      <div className='container-menu-principal'>
        <a href="#inicio">INICIO</a>
        <a href='#testimonios'> HOTEL</a>
        <a href='#habitaciones'> HABITACIONES</a>
        <a href='#galeria'> GALERIA</a>
        <a href='#googleMaps' className='menu-ubi'>GOOGLE MAPS</a>
        <a href='#foother'>CONTACTO</a>
        <FiPhone /><p className='phone'>286 9233141</p>
      </div>
      <Link to='/home/auth' className='go-account'>RESERVA AHORA</Link>
    </div>
  )
}
export default MenuNav 