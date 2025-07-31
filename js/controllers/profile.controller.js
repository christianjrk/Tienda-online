// js/controllers/profile.controller.js
import UsuarioModel from '../models/usuario.model.js';

const usuarioModel = new UsuarioModel();

const inputUsuario = document.getElementById('input-usuario');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const btnGuardar = document.getElementById('btn-guardar');
const mensajeEstado = document.getElementById('mensaje-estado');

function mostrarMensaje(msg, esError = false) {
  mensajeEstado.textContent = msg;
  mensajeEstado.style.color = esError ? 'red' : 'green';
  mensajeEstado.style.display = 'block';
}

function ocultarMensaje() {
  mensajeEstado.style.display = 'none';
}

function cargarDatos() {
  const usuario = usuarioModel.obtenerSesion();
  if (!usuario) {
    window.location.href = '../pages/form-login.html';
    return;
  }

  inputUsuario.value = usuario.usuario;
  inputEmail.value = usuario.email;
  inputPassword.value = usuario.password;
}

btnGuardar.addEventListener('click', e => {
  e.preventDefault();
  ocultarMensaje();

  const usuario = usuarioModel.obtenerSesion();
  if (!usuario) {
    window.location.href = '../pages/form-login.html';
    return;
  }

  const usuarioNuevo = inputUsuario.value.trim();
  const emailNuevo = inputEmail.value.trim();
  const passwordNueva = inputPassword.value.trim();

  if (!usuarioNuevo || !emailNuevo || !passwordNueva) {
    mostrarMensaje('Completa todos los campos', true);
    return;
  }

  // Actualizar usuario (simulación, aquí solo guardamos en localStorage)
  try {
    usuarioModel.logout(); // Borramos sesión anterior

    usuarioModel.registrar({
      usuario: usuarioNuevo,
      email: emailNuevo,
      password: passwordNueva,
    });

    usuarioModel.login(usuarioNuevo, passwordNueva);

    mostrarMensaje('Perfil actualizado con éxito');
  } catch (error) {
    mostrarMensaje(error.message, true);
  }
});

cargarDatos();
