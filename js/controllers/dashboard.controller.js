// js/controllers/dashboard.controller.js
import UsuarioModel from '../models/usuario.model.js';

const usuarioModel = new UsuarioModel();

const usuarioNombre = document.getElementById('usuario-nombre');
const btnLogout = document.getElementById('btn-logout');

function initDashboard() {
  const usuario = usuarioModel.obtenerSesion();

  if (!usuario) {
    window.location.href = '../pages/form-login.html'; // Redirigir si no hay sesión
    return;
  }

  usuarioNombre.textContent = usuario.usuario || usuario.email;

  btnLogout.addEventListener('click', () => {
    usuarioModel.logout();
    window.location.href = '../pages/form-login.html';
  });
}

initDashboard();
