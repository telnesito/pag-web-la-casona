import React from 'react'
import { HeaderPage } from './HeaderPage'


const MasFotos = () => {
  return (
    <div className='container-mas-fotos'>
      <HeaderPage nombrePagina='Instalaciones' direccion='Galeria' />
      <div className='title-galeria'>
        <h2>Galeria de Imagenes</h2>
        <p>Hotel La Casona</p>
      </div>
      <div className='container-fotos'>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/pasillo2.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/pasillo4.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/patio.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/recepcion3.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/recepcion4.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/patio2.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/pasillo3.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/fachada7.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/inc-6861-min.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/recepcion2.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/comedor.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/fachada2.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/fachada3.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/pasillo5.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/fachada6.webp'></img>
        <img alt='imagenes' width='200px' loading='lazy' height='200px' src='images/galeria/pasillo7.webp'></img>
      </div>




    </div>
  )
}

export default MasFotos