import React from 'react'
import { Link } from 'react-router-dom'

const BottomMenu = () => {
  return (
    <div className='container-bottom-menu' id='inicio'>
      <Link className='aux-class-1'>Terminos y condiciones</Link>
      <Link className='aux-class-3'>Promociones</Link>
      <Link className='aux-class-4'>Contactanos</Link>
      <a className='reser-w' rel='noreferrer' target='_blank' href='https://api.whatsapp.com/send/?phone=582869236121&text=Hola+me+gustaria+obtener+informacion+sobre+sus+servicios&type=phone_number&app_absent=0'>Reserva via WhatsApp</a>
    </div>
  )
}

export default BottomMenu