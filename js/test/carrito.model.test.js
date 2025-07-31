import Carrito from '../js/models/carrito.model.js';

describe('Carrito Model', () => {
  let carrito;

  beforeEach(() => {
    carrito = new Carrito();
  });

  test('debe comenzar vacío', () => {
    expect(carrito.items.length).toBe(0);
    expect(carrito.getTotalCantidad()).toBe(0);
    expect(carrito.getTotalPrecio()).toBe(0);
  });

  test('debe agregar un producto', () => {
    const producto = {
      id: '1',
      nombre: 'Taza Tigre',
      precio: 12.5,
      cantidad: 1,
      imagen: 'img.jpg'
    };

    carrito.agregarItem(producto);

    expect(carrito.items.length).toBe(1);
    expect(carrito.getTotalCantidad()).toBe(1);
    expect(carrito.getTotalPrecio()).toBe(12.5);
  });

  test('debe actualizar cantidad si el producto ya existe', () => {
    const producto = { id: '1', nombre: 'Item', precio: 10, cantidad: 1, imagen: 'img.jpg' };
    carrito.agregarItem(producto);
    carrito.agregarItem(producto); // nuevamente

    expect(carrito.items.length).toBe(1);
    expect(carrito.items[0].cantidad).toBe(2);
  });

  test('debe eliminar un producto', () => {
    carrito.agregarItem({ id: '1', nombre: 'Item', precio: 10, cantidad: 1, imagen: 'img.jpg' });
    carrito.eliminarItem('1');
    expect(carrito.items.length).toBe(0);
  });

  test('debe limpiar el carrito', () => {
    carrito.agregarItem({ id: '1', nombre: 'Item', precio: 10, cantidad: 1, imagen: 'img.jpg' });
    carrito.vaciar();
    expect(carrito.items).toEqual([]);
  });
});
