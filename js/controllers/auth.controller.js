// js/controllers/auth.controller.js

document.addEventListener('DOMContentLoaded', () => {
  // Elementos del panel de usuario
  const userIcon = document.getElementById('user-icon');
  const userPanel = document.getElementById('user-panel');

  if (userIcon && userPanel) {
    // Mostrar/ocultar panel al clicar el icono
    userIcon.addEventListener('click', (e) => {
      e.preventDefault();
      userPanel.classList.toggle('hidden');
    });

    // Ocultar panel si se clickea fuera
    document.addEventListener('click', (e) => {
      if (!userPanel.contains(e.target) && !userIcon.contains(e.target)) {
        userPanel.classList.add('hidden');
      }
    });
  }

  // Formularios
  const loginForm = document.getElementById('form-login');
  const registerForm = document.getElementById('form-register');

  // Inicio de sesión
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = loginForm.querySelector('#login-email').value.trim();
      const password = loginForm.querySelector('#login-password').value.trim();

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = '../index.html';
      } else {
        alert('Credenciales incorrectas');
      }
    });
  }

  // Registro de nuevo usuario
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = registerForm.querySelector('#register-name').value.trim();
      const email = registerForm.querySelector('#register-email').value.trim();
      const password = registerForm.querySelector('#register-password').value.trim();
      const confirmPassword = registerForm.querySelector('#register-confirm').value.trim();

      if (!name || !email || !password || !confirmPassword) {
        alert('Por favor completa todos los campos.');
        return;
      }

      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }

      const users = JSON.parse(localStorage.getItem('users')) || [];

      const userExists = users.some(u => u.email === email);
      if (userExists) {
        alert('Este correo ya está registrado.');
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      alert('Usuario registrado con éxito. Ahora puedes iniciar sesión.');
      window.location.href = '../pages/login.html';
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const userIcon = document.getElementById('user-icon');
  const userPanel = document.getElementById('user-panel');
  const btnLogin = document.getElementById('btn-login');
  const btnRegister = document.getElementById('btn-register');
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');

  // Mostrar / ocultar panel al hacer click en icono usuario
  userIcon.addEventListener('click', (e) => {
    e.preventDefault();
    userPanel.classList.toggle('hidden');
  });

  // Cambiar entre formularios con botones
  btnLogin.addEventListener('click', () => {
    btnLogin.classList.add('active');
    btnRegister.classList.remove('active');
    formLogin.classList.add('active');
    formLogin.classList.remove('hidden');
    formRegister.classList.add('hidden');
    formRegister.classList.remove('active');
  });

  btnRegister.addEventListener('click', () => {
    btnRegister.classList.add('active');
    btnLogin.classList.remove('active');
    formRegister.classList.add('active');
    formRegister.classList.remove('hidden');
    formLogin.classList.add('hidden');
    formLogin.classList.remove('active');
  });
});
