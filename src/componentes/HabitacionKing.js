import React from 'react'
import { MdAcUnit, MdLocalHotel, MdRoomService, MdDesktopMac, MdNetworkWifi, MdBathtub } from 'react-icons/md'
import { HeaderPage } from './HeaderPage'
import { DetailsHab } from './DetailsHab'
import { ImagenesCarousel } from './CarouselHabitaciones';


const HabitacionKing = () => {
  return (
    <div className='container-habitacion-king'>
      <HeaderPage nombrePagina='Habitacion Matrimonial King Size' direccion='Habitacion king' />
      <div className='caracteristica-king'>
        <ImagenesCarousel sourceImg={{
          img_1: "/images/habitacionmatrimonial1.webp",
          img_2: "/images/habitacionmatrimonial5.jpg",
          img_3: "/images/habitacionmatrimonial4.jpg"
        }} />
        <div className='desc-king'>
          <DetailsHab></DetailsHab>
          <div className='all-service'>
            <div className='ctn-serv'>
              <MdBathtub className='icon-serv' />
              <p>Agua Caliente</p>
            </div>

            <div className='ctn-serv'>
              <MdLocalHotel className='icon-serv' />
              <p>Cama tamaño King Size</p>
            </div>

            <div className='ctn-serv'>
              <MdDesktopMac className='icon-serv' />
              <p>Television por cable</p>
            </div>

            <div className='ctn-serv'>
              <MdNetworkWifi className='icon-serv' />
              <p>Wifi</p>
            </div>

            <div className='ctn-serv'>
              <MdRoomService className='icon-serv' />
              <p>Servicios a la habitacion</p>
            </div>

            <div className='ctn-serv'>
              <MdAcUnit className='icon-serv' />
              <p>Aire acondicionado</p>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default HabitacionKing