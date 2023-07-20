import { MdPerson, MdLocalHotel } from 'react-icons/md'
import { Link, Route, Routes } from 'react-router-dom'
import { HeaderPage } from './HeaderPage'
import React from 'react'

const VerDetalles = () => {
  return (
    <>
      <button id="testimonios" className='btn-details'>Ver detalles</button>
    </>
  )
}

const HabComp = (props) => {
  return (

    <div className='ctn-hab'>
      <div className={props.habitacion.img}></div>
      <h5>Habitacion <br />{props.habitacion.tipo} </h5><span></span>
      <p className='hab-desc'>{props.habitacion.descripcion}</p>

      <div className='contenedor-espec'>
        <div className='espec-hab'>
          <MdLocalHotel className='icon-spec' />
          <p>{props.habitacion.camas}</p>
        </div>

        <div className='espec-hab'>
          <MdPerson className='icon-spec' />
          <p>{props.habitacion.personas}</p>
        </div>
      </div>
      <Link to={props.habitacion.url}><VerDetalles /></Link>
    </div>

  )
}

const MeetHabitaciones = () => {

  return (
    <div id='habitaciones' className='container-habitaciones'>
      <Routes>
        <Route path='/habitaciones/todas' element={<HeaderPage />}> </Route>
      </Routes>
      <h2>Nos adaptamos a ti</h2>
      <p className='subtitle-hab'>Descubre todas nuestras habitaciones y todos lo que podemos ofrecer</p>
      <div className='container-habs'>
        <HabComp habitacion={{
          tipo: "King",
          descripcion: "Nuestra propuesta para viajes en pareja!, perfecta para una estadia tranquila y placentera",
          camas: "1 cama King Size",
          personas: "2 personas",
          url: "/home/habitacion-king",
          img: "img-hab-1"
        }} />

        <HabComp habitacion={{
          tipo: "Doble King",
          descripcion: "Habitacion con dos camas separadas, ideal para compartir espacio con amigos o colegas de trabajo",
          camas: "2 camas King Size",
          personas: "4 personas",
          url: "/home/habitacion-doble",
          img: "img-hab-2"
        }} />

        <HabComp habitacion={{
          tipo: "Triple",
          descripcion: "En definitiva la opcion perfecta para quienes viajan en grupos. Habitacion con 3 camas individuales separadas",
          camas: "3 camas individuales",
          personas: "3 personas",
          url: "/home/habitacion-triple",
          img: "img-hab-3"
        }} />

        <HabComp habitacion={{
          tipo: "Familiar",
          descripcion: "Habitacion con 4 camas individuales separadas, sin duda la opcion perfecta para las familias que viajan",
          camas: "4 camas individuales",
          personas: "4 personas",
          url: "/home/habitacion-cuadruple",
          img: "img-hab-4"
        }} />
      </div>
    </div>
  )
}

export default MeetHabitaciones