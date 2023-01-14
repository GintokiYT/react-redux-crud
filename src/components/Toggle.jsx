import { useDispatch, useSelector } from 'react-redux';
import { modificarThemeAction } from '../redux/actions/theme.actions';

import { BsMoonFill, BsSunFill } from 'react-icons/bs';

import Estilos from '../css/Toggle.module.css';

const Toggle = () => {

  const dispatch = useDispatch();

  const theme = useSelector(state => state.theme);

  console.log(theme)

  const handleChangeTheme = (theme) => {
    dispatch( modificarThemeAction(theme.theme) );
  }

  return (  
    <div 
      className={Estilos.Toggle}
      onClick={() => handleChangeTheme(theme)}
    >
    { theme.theme === 'dark-theme'
      ? <BsMoonFill />
      : <BsSunFill />
    }
    </div>
  );
}
 
export default Toggle;