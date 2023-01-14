import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../redux/actions/productos.actions';

import Estilos from '../css/Productos.module.css';
import Producto from './Producto';

const Productos = () => {

  const dispatch = useDispatch();

  const productos = useSelector(state => state.productos)

  useEffect(() => {
    dispatch( obtenerProductosAction() );
  }, []);

  return (  
    <div className={Estilos.ContenedorProductos}>
      <h2 className={Estilos.SubTitulo}>
        Numero de Productos: {productos.productos.length}
      </h2>
      <Link 
        className={Estilos.ButtonProducto}
        to='/nuevo-producto'
      >Agregar nuevo producto</Link>
      <div className={Estilos.ContenedorGrid}>
        { productos.productos.map( producto => {
          return (
            <Producto 
              key={producto.id}
              producto={producto}
            />
          )
        })}
      </div>
    </div>
  );
}
 
export default Productos;