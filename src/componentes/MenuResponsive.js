import React from 'react'
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai'
import { VscMenu } from 'react-icons/vsc'
import { useState, useRef } from 'react';


const MenuMobile = () => {
  return (
    <div id='menu-mobile' className='menu-mobile'>
      <a href='#habitaciones' style={{ textDecoration: "none", color: 'white', padding: "10px", fontSize: '15px' }} >HABITACIONES</a>
      <a href='#servicios' style={{ textDecoration: "none", color: 'white', padding: "10px", fontSize: '15px' }}>SERVICIOS</a>
      <a href='#testimonios' style={{ textDecoration: "none", color: 'white', padding: "10px", fontSize: '15px' }} >HOTEL</a>
      <a href='#galeria' style={{ textDecoration: "none", color: 'white', padding: "10px", fontSize: '15px' }} >GALERIA</a>
      <a href='#googleMaps' style={{ textDecoration: "none", color: 'white', padding: "10px", fontSize: '15px' }}>GOOGLE MAPS</a>
      <a href='#a' style={{ textDecoration: "none", color: 'white', padding: "10px", fontSize: '15px' }} className='terms' >TERMINOS Y CONDICIONES</a>
      <a href='#foother' style={{ textDecoration: "none", color: 'white', padding: "10px", fontSize: '15px' }}>CONTACTO</a>
      <a href='#a' style={{ textDecoration: "none", color: 'white', padding: "10px", fontSize: '15px' }}>PROMOCIONES</a>
    </div>)
}

const MenuResponsive = () => {
  const containerMenu = useRef()

  const [btnState, setBtnState] = useState(false)

  const handleTogleMenu = () => {
    if (btnState === true) {
      setBtnState(false)
      containerMenu.current.style.height = '60px'
    }
    else {
      containerMenu.current.style.height = '390px'
      setBtnState(true)
    }
  }

  return (
    <div ref={containerMenu} className='container-all'>
      <div className='container-menu-responsive'>
        <div id='btn-menu' className='menu-responsive' onClick={handleTogleMenu}>
          <VscMenu />
        </div>
        <p> <FiPhone /> 286 9233141</p>
        <p> <AiOutlineMail /> lacasonapzo@gmail.com</p>

      </div>
      {btnState ? <MenuMobile /> : false}
    </div>
  )
}

export default MenuResponsive