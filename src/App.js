import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { Route, Routes } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import Citas from './components/Cita/Cita';
import Contacto from './components/Contacto/Contacto';
import Home from './components/Home/Home';
import MyAppFooter from './components/Footer/Footer';
import MyAppNavbar from './components/Navbar/Navbar';
import React from 'react';
import Servicios from './components/Servicios/Servicios';

function App() {
  return (
    <>
      {/*     <Provider> */}
      <BrowserRouter>
      <MyAppNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/citas' element={<Citas />} />
        </Routes>
      <MyAppFooter/>
      </BrowserRouter>
      {/*     </Provider> */}
    </>
  );
}

export default App;
