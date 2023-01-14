import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componenets
import Encabezado from './components/Encabezado';
import Productos from './components/Productos';
import FormProducto from './components/FormProducto';

import Toggle from './components/Toggle';

const App = () => {

  const theme = useSelector(state => state.theme.theme)

  useEffect(() => {
    const body = document.querySelector('body');

    if(theme === 'dark-theme') {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }

  }, [theme]);

  return (  
    <BrowserRouter>
    <Encabezado/>
      <main className='contenedor'>
        <Routes>
          <Route path='/' element={<Productos />} />
          <Route path='/nuevo-producto' element={<FormProducto />} />
        </Routes>
        <Toggle/>
      </main>
    </BrowserRouter>
  );
}
 
export default App;