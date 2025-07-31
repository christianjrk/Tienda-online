// js/redux/carrito.slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // { id, nombre, precio, cantidad, imagen }
  totalCantidad: 0,
  totalPrecio: 0,
};

const calcularTotales = (items) => {
  const totalCantidad = items.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  return { totalCantidad, totalPrecio };
};

const carritoSlice = createSlice({
  name: 'carrito',
  initialState,
  reducers: {
    agregarProducto: (state, action) => {
      const producto = action.payload;
      const index = state.items.findIndex(item => item.id === producto.id);
      if (index >= 0) {
        state.items[index].cantidad += producto.cantidad;
      } else {
        state.items.push(producto);
      }
      const totales = calcularTotales(state.items);
      state.totalCantidad = totales.totalCantidad;
      state.totalPrecio = totales.totalPrecio;
    },
    eliminarProducto: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      const totales = calcularTotales(state.items);
      state.totalCantidad = totales.totalCantidad;
      state.totalPrecio = totales.totalPrecio;
    },
    actualizarCantidad: (state, action) => {
      const { id, cantidad } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index >= 0 && cantidad > 0) {
        state.items[index].cantidad = cantidad;
      }
      const totales = calcularTotales(state.items);
      state.totalCantidad = totales.totalCantidad;
      state.totalPrecio = totales.totalPrecio;
    },
    limpiarCarrito: (state) => {
      state.items = [];
      state.totalCantidad = 0;
      state.totalPrecio = 0;
    },
  },
});

export const {
  agregarProducto,
  eliminarProducto,
  actualizarCantidad,
  limpiarCarrito,
} = carritoSlice.actions;

export default carritoSlice.reducer;
