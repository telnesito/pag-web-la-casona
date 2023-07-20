import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
  return (
    <div id="foother" className='container-footer'>
      <div className='container-info'>
        <div id='footer-contact' className='footer-contact'>
          <h3>Contactanos</h3>
          <p className='footer-ext'>Para recibir ofertas exclusivas</p>
          <form>
            <input id='footer-i-text' type='text' placeholder='Correo electronico..'></input>
            <input id='footer-i-submit' type='button' value='ENVIAR'></input>
          </form>
          <section className='footer-social'>
            <p className='footer-follow'>Siguenos</p>

            <a className='fb-fo' rel='noreferrer' target='_blank' href='https://www.facebook.com/lacasonapzo'><AiFillFacebook /></a>
            <a className='ws-fo' rel='noreferrer' target='_blank' href='https://api.whatsapp.com/send/?phone=582869236121&text=Hola+me+gustaria+obtener+informacion+sobre+sus+servicios&type=phone_number&app_absent=0'><AiOutlineWhatsApp /></a>
            <a className='ig-fo' rel='noreferrer' target='_blank' href='https://www.instagram.com/lacasona_pzo/'><AiFillInstagram /></a>
          </section>
        </div>

        <div id='container-dir' className='container-dir'>
          <p>Poasada la casona, Carrera Antillas, Ciudad Guayana 8050, Bolivar</p>
          <p>Hora de check in entrada 2:00pm -hora de check out salida 10:30am</p>
          <p>Numeros de contactos: 286 9233141/9230692</p>
          <p className='margin-0'>WhatsApp: +58 286-0236121</p>
          <p>Mail: lacasonapzo@gmail.com</p>
        </div>
        <div id='redir-fo' className='container-redir'>
          <section className='li-footer'>
            <p>Clinica privada cercana</p>
            <p>Atencion 24/7</p>
            <p>Consulta promocion</p>
            <p>Zona lujosa</p>
            <p>Disponibilidad de cocina</p>
            <p>Licencia de bebicas alcoholicas</p>
          </section>


        </div>
      </div>
      <div className='container-choose'>
        <span className='container-footer-title'><h2>HOTEL</h2> <h2>RESTAURANTE</h2> <h2>EVENTOS</h2></span>
        <p>Posada La Casona todos los derechos de autor reservado ©</p>
      </div>


    </div >
  )
}

export default Footer