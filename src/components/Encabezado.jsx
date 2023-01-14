import { Link } from 'react-router-dom';

import Estilos from '../css/Encabezado.module.css';

const Encabezado = () => { 
  return (  
    <header className={Estilos.HeaderPrincipal}>
      <nav className={Estilos.Navegacion}>
        <Link
          to='/'
        >CRUD PRODUCTOS</Link>
      </nav>
    </header>
  );
}
 
export default Encabezado;