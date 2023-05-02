import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MyAppNavbar from './components/Navbar/Navbar';
import MyAppFooter from './components/Footer/Footer';
import Home from './components/Home/Home';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';
import Citas from './components/Cita/Cita';
import './App.scss'

function App() {
  return (
    <>
{/*     <Provider> */}
      <BrowserRouter>
        <MyAppNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/citas' element={<Citas/>}/>
        </Routes>
        <MyAppFooter/>
      </BrowserRouter>
{/*     </Provider> */}
    </>
  );
}

export default App;
