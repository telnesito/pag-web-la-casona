import { MdAcUnit, MdLocalHotel, MdRoomService, MdDesktopMac, MdNetworkWifi, MdBathtub } from 'react-icons/md'
import { HeaderPage } from './HeaderPage'
import { DetailsHab } from './DetailsHab'
import { ImagenesCarousel } from './CarouselHabitaciones';

const HabitacionDuo = () => {
  return (
    <div className='container-habitacion-king'>
      <HeaderPage nombrePagina='Habitacion Doble King Size' direccion='Habitacion doble' />
      <div className='caracteristica-king'>
        <ImagenesCarousel sourceImg={{
          img_1: "/images/habitaciondoble1.webp",
          img_2: "/images/habitaciondoble2.webp",
          img_3: "/images/habitacionDoble3.jpg"
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
              <p>2 Camas tamaño King Size</p>
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


export default HabitacionDuo