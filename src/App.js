import './App.css';
import BottomMenu from './componentes/BottomMenu';
import MeetHabitaciones from './componentes/Habitaciones';
import Hero from './componentes/Hero';
import Footer from './componentes/Footer'
import LugaresCercanos from './componentes/LugaresCercanos';
import WhatsappBotom from './componentes/WhatsappBotom';
import MenuNav from './componentes/MenuNav';
import MenuResponsive from './componentes/MenuResponsive';
import { Route, Routes } from 'react-router-dom';
import Bienvenida from './componentes/Bienvenida';
import Testimonios from './componentes/Testimonios';
import Galeria from './componentes/Galeria';
import HabitacionKing from './componentes/HabitacionKing';
import HabitacionDuo from './componentes/HabitacionDuo';
import HabitacionCuadruple from './componentes/HabitacionCuadruple';
import HabitacionTriple from './componentes/HabitacionTriple';
import Lugares from './componentes/Lugares';
import NotFound from './componentes/NotFound';
import MasFotos from './componentes/MasFotos';
import Auth from './componentes/Auth';

const Home = () => {
  return (
    <>
      <MenuNav />
      <MenuResponsive />
      <Hero />
      <Bienvenida />
      <MeetHabitaciones />
      <Testimonios />
      <Galeria />
      <LugaresCercanos />
    </>)
}

function App() {
  return (

    <div className="App">
      <BottomMenu />

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home/habitacion-king' element={<HabitacionKing />}></Route>
        <Route path='/home/habitacion-doble' element={<HabitacionDuo />}></Route>
        <Route path='/home/habitacion-triple' element={<HabitacionTriple />}></Route>
        <Route path='/home/habitacion-cuadruple' element={<HabitacionCuadruple />}></Route>
        <Route path='/home/lugares-cercanos' element={<Lugares />}></Route>
        <Route path='/galeria' element={<MasFotos></MasFotos>}></Route>
        <Route path='/home/auth' element={<Auth />}></Route>
        <Route path='*' element={<NotFound ></NotFound>}></Route>
      </Routes>

      <WhatsappBotom />
      <Footer />

    </div>
  );
}

export default App;
