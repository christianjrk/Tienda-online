// js/models/carrito.model.js

const STORAGE_KEY = 'carritoCompras';

class CarritoModel {
  constructor() {
    // Cargar carrito del localStorage o iniciar vacío
    const carritoGuardado = localStorage.getItem(STORAGE_KEY);
    this.items = carritoGuardado ? JSON.parse(carritoGuardado) : [];
  }

  // Guardar carrito en localStorage
  guardar() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
  }

  // Obtener todos los ítems
  obtenerItems() {
    return this.items;
  }

  // Agregar producto al carrito
  agregarProducto(producto) {
    // producto debe tener { id, nombre, precio, cantidad }
    const index = this.items.findIndex(item => item.id === producto.id);

    if (index > -1) {
      // Si ya existe, aumentar cantidad
      this.items[index].cantidad += producto.cantidad;
    } else {
      this.items.push(producto);
    }
    this.guardar();
  }

  // Actualizar cantidad de un producto
  actualizarCantidad(id, nuevaCantidad) {
    const index = this.items.findIndex(item => item.id === id);
    if (index > -1) {
      if (nuevaCantidad <= 0) {
        // Remover producto si cantidad 0 o menos
        this.items.splice(index, 1);
      } else {
        this.items[index].cantidad = nuevaCantidad;
      }
      this.guardar();
    }
  }

  // Eliminar producto por id
  eliminarProducto(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.guardar();
  }

  // Calcular total del carrito
  calcularTotal() {
    return this.items.reduce((total, item) => {
      return total + item.precio * item.cantidad;
    }, 0);
  }

  // Vaciar carrito
  vaciar() {
    this.items = [];
    this.guardar();
  }
}

export default CarritoModel;
