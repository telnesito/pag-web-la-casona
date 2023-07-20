import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import Aos from 'aos'
import "aos/dist/aos.css"


const Galeria = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <div className='container-galeria'>
      <h2>Galeria</h2>

      <div className='row m-5'>
        <div className='col-lg-4 mb-4'>
          <img data-aos='fade-in' className='w-100 mb-4' alt="recepcion" loading='lazy' src='/images/home/comedor.webp'></img>
          <img data-aos='fade-in' className='w-100 mb-4' alt="recepcion" loading='lazy' src='/images/home/recepcion2.webp'></img>

        </div>
        <div className='col-lg-4 mb-4'>
          <img data-aos='fade-in' className='w-100 mb-4' alt="recepcion" loading='lazy' src='/images/home/pasillo5.webp' ></img>
          <img data-aos='fade-in' className='w-100 mb-4' alt="recepcion" loading='lazy' src='/images/home/pasillo3.webp' ></img>

        </div>
        <div className='col-lg-4 mb-4'>
          <img data-aos='fade-in' className='w-100 mb-4 ' alt="recepcion" loading='lazy' src='/images/home/patio2.webp' ></img>
          <img data-aos='fade-in' className='w-100 mb-4' alt="recepcion" loading='lazy' src='/images//home/inc-6861-min.webp' ></img>

        </div>
        <Link to='/galeria'>
          <button className='ver-fotos'>Ver mas fotos</button>
        </Link>
      </div>



    </div >
  )
}

export default Galeria