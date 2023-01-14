import {
  OBTENER_PRODUCTOS,
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO
} from '../types';

const initialState = {
  productos: []
}

const productosReducer = (state = initialState, action) => {
  switch(action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        productos: action.payload
      }
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload]
      }
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== action.payload)
      }
    default:
      return {
        ...state
      }
  }
}

export default productosReducer;