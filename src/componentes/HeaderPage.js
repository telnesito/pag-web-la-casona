import React from 'react'
import { Direcciones } from './Direcciones'

export const HeaderPage = (props) => {
  return (<>
    <div className='cont-title-king'>
      <div className='title-king'>
        <Direcciones Direccion={props.direccion} />
        <h4>{props.nombrePagina}</h4>
      </div>
      <div className='container-btn-hab'>
        <a className='btn-reserv-hab' href='#a'>RESERVAR YA</a>
      </div>
    </div>
  </>
  )
}


