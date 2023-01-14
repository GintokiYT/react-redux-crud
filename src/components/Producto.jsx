import Estilos from '../css/Producto.module.css';
import { useDispatch } from 'react-redux';

import { eliminarProductoAction } from '../redux/actions/productos.actions';

const Producto = ({producto}) => {

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch( eliminarProductoAction(id) );
  }

  return (  
    <div className={Estilos.ProductoCard}>
      <p><span>Producto: </span>{producto.nombre}</p>
      <p><span>Precio: </span>{producto.precio}</p>
      <div>
        <button>Editar</button>
        <button
          onClick={() => handleDelete(producto.id)}
        >Eliminar</button>
      </div>
    </div>
  );
}
 
export default Producto;