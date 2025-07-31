// usuario.model.js

export function obtenerUsuarios() {
  return JSON.parse(localStorage.getItem('usuarios')) || [];
}

export function guardarUsuarios(usuarios) {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

export function loginUsuario(email, password) {
  const usuarios = obtenerUsuarios();
  const usuario = usuarios.find(user => user.email === email && user.password === password);
  if (usuario) {
    localStorage.setItem('usuarioActual', JSON.stringify(usuario));
    return true;
  }
  return false;
}
