import Producto from '../js/models/productos.model.js';

describe('Producto Model', () => {
  test('debe crear un producto correctamente', () => {
    const data = {
      nombre: 'Gorra ecológica',
      precio: 15,
      imagen: 'imagen.jpg',
    };

    const producto = new Producto(data);

    expect(producto.nombre).toBe('Gorra ecológica');
    expect(producto.precio).toBe(15);
    expect(producto.imagen).toBe('imagen.jpg');
  });

  test('debe tener un ID único', () => {
    const producto1 = new Producto({ nombre: 'Prod 1', precio: 1, imagen: 'img1.jpg' });
    const producto2 = new Producto({ nombre: 'Prod 2', precio: 2, imagen: 'img2.jpg' });

    expect(producto1.id).not.toBe(producto2.id);
  });
});
