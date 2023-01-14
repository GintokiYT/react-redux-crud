import {
  MODIFICAR_THEME
} from '../types';

export const modificarThemeAction = (theme) => {
  return (dispatch) => {
    dispatch( modificarTheme(theme) );
  }
}

const modificarTheme = (theme) => {
  const nuevoTema = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
  localStorage.setItem('theme', nuevoTema);
  return {
    type: MODIFICAR_THEME,
    payload: nuevoTema
  }
}