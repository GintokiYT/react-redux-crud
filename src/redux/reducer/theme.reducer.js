import {
  MODIFICAR_THEME
} from '../types';

const initialState = {
  theme: localStorage.getItem('theme') || 'dark-theme'
};

const themeReducer = (state = initialState, action) => {
  switch(action.type) {
    case MODIFICAR_THEME:
      return {
        ...state,
        theme: action.payload
      }
    default: 
      return {
        ...state
      }
  }
}

export default themeReducer;