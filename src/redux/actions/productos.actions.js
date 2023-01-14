import {
  OBTENER_PRODUCTOS,
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO
} from '../types';

import clienteAxios from '../../config/axios';

//* OBTENER PRODUCTOS */
export const obtenerProductosAction = () => {
  return async (dispatch) => {
    try {
      const response = await clienteAxios.get('/productos');
      dispatch( obtenerProductos(response.data) );
    } catch (error) {
      console.log(error);
    }
  }
}

const obtenerProductos = (productos) => {
  return {
    type: OBTENER_PRODUCTOS,
    payload: productos
  }
}
//* FIN OBTENER PRODUCTO */

//* AGREGAR PRODUCTO */
export const agregarProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch( agregarProducto(producto) );

    try {
      await clienteAxios.post('/productos', producto);
    } catch (error) {
      console.log(error);
    }
  }
}

const agregarProducto = (producto) => {
  return {
    type: AGREGAR_PRODUCTO,
    payload: producto
  }
}
//* FIN AGREGAR PRODUCTO */

//* ELIMINAR PRODUCTO */
export const eliminarProductoAction = (id) => {
  return async (dispatch) => {
    dispatch( eliminarProducto(id) );

    try {
      const productos = await clienteAxios.delete(`/productos/${id}`);
      console.log(productos);
    } catch (error) {
      console.log(error);
    }
  }
}

const eliminarProducto = (id) => {
  return {
    type: ELIMINAR_PRODUCTO,
    payload: id
  }
}