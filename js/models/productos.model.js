// js/models/productos.model.js

const STORAGE_KEY = 'productosLista';

class ProductosModel {
  constructor() {
    // Intentar cargar productos guardados en localStorage, si no existe, cargar productos por defecto
    const productosGuardados = localStorage.getItem(STORAGE_KEY);
    this.productos = productosGuardados
      ? JSON.parse(productosGuardados)
      : this._productosPorDefecto();

    this._guardar();
  }

  _guardar() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.productos));
  }

  _productosPorDefecto() {
    return [
      {
        id: 'articulo1',
        nombre: 'Camiseta “Elefantes Unidos”',
        descripcion: '100% algodón con ilustración de elefante. Parte de lo recaudado se donará a proyectos de conservación de elefantes.',
        precio: 18.00,
        imagen: '../imagenes/camiseta elefante.jpeg',
        stock: 100,
      },
      {
        id: 'articulo2',
        nombre: 'Taza “Salva a los Tigres”',
        descripcion: 'Taza de cerámica con diseño de tigre. Los fondos apoyan refugios de tigres en Asia.',
        precio: 12.50,
        imagen: '../imagenes/taza de tigre.jpg',
        stock: 50,
      },
      // ... Añade todos los productos que tienes en tu index.html
    ];
  }

  // Obtener todos los productos
  obtenerTodos() {
    return this.productos;
  }

  // Obtener producto por id
  obtenerPorId(id) {
    return this.productos.find(prod => prod.id === id);
  }

  // Agregar producto (opcional)
  agregarProducto(producto) {
    this.productos.push(producto);
    this._guardar();
  }

  // Actualizar producto (opcional)
  actualizarProducto(id, datosActualizados) {
    const index = this.productos.findIndex(p => p.id === id);
    if (index > -1) {
      this.productos[index] = { ...this.productos[index], ...datosActualizados };
      this._guardar();
    }
  }

  // Eliminar producto (opcional)
  eliminarProducto(id) {
    this.productos = this.productos.filter(p => p.id !== id);
    this._guardar();
  }
}

export default ProductosModel;
