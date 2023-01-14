import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { v4 as uuid } from 'uuid';
import { agregarProductoAction } from '../redux/actions/productos.actions';

const FormProducto = () => {

  const dispatch = useDispatch();

  const [ producto, setProducto ] = useState({
    nombre: '',
    precio: '',
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(agregarProductoAction({
      ...producto,
      id: uuid()
    }));
  }

  return (  
    <form
      onSubmit={handleSubmit}
    >
      <input 
        type='text' 
        name='nombre'
        placeholder='Producto'
        value={producto.nombre}
        onChange={handleChange}
      />
      <input 
        type='number' 
        name='precio'
        placeholder='precio'
        value={producto.precio}
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
}
 
export default FormProducto;