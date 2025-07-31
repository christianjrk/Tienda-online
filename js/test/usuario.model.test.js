import Usuario from '../js/models/usuario.model.js';

describe('Usuario Model', () => {
  test('debe crear un usuario correctamente', () => {
    const data = {
      nombre: 'María',
      correo: 'maria@example.com',
      contraseña: '123456',
    };

    const usuario = new Usuario(data);

    expect(usuario.nombre).toBe('María');
    expect(usuario.correo).toBe('maria@example.com');
    expect(usuario.contraseña).toBe('123456');
  });

  test('debe generar un ID automáticamente', () => {
    const usuario = new Usuario({ nombre: 'Luis', correo: 'luis@example.com', contraseña: 'abc123' });
    expect(usuario.id).toBeDefined();
    expect(typeof usuario.id).toBe('string');
  });
});
