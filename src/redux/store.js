import { configureStore } from '@reduxjs/toolkit';

import productosReducer from '../redux/reducer/productos.reducer';
import themeReducer from '../redux/reducer/theme.reducer';

const store = configureStore({
  reducer: {
    productos: productosReducer,
    theme: themeReducer
  } 
})

export default store;