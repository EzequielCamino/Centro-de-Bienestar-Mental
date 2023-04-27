import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/* import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'; */
import MyAppNavbar from './components/Navbar/Navbar';
/* import MyAppFooter from './components/Footer/Footer';
import Home from './components/Home/Home'; */

function App() {
  return (
    <>
{/*     <Provider> */}
      {/* <BrowserRouter> */}
        <MyAppNavbar/>
        {/* <Routes>
          <Route path="/" element={<Home/>} />
        </Routes> */}
        {/* <MyAppFooter/> */}
      {/* </BrowserRouter> */}
{/*     </Provider> */}
    </>
  );
}

export default App;
