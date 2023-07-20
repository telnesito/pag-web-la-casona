import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

const WhatsappBotom = () => {
  return (
    <div className='contenedor-wsp'>
      <a rel='noreferrer' target='_blank' href='https://api.whatsapp.com/send/?phone=582869236121&text=Hola+me+gustaria+obtener+informacion+sobre+sus+servicios&type=phone_number&app_absent=0'><IoLogoWhatsapp className='icon-wsp' /></a>
      <a className='anchor-wsp' rel='noreferrer' target='_blank' href='https://api.whatsapp.com/send/?phone=582869236121&text=Hola+me+gustaria+obtener+informacion+sobre+sus+servicios&type=phone_number&app_absent=0'>Reserva via WhatsApp</a>
    </div>
  )
}

export default WhatsappBotom