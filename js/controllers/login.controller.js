document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('form-login');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = loginForm.querySelector('#login-email').value.trim();
      const password = loginForm.querySelector('#login-password').value.trim();

      if (!email || !password) {
        alert('Por favor, complete ambos campos.');
        return;
      }

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = '../index.html'; // Ajusta si cambia la ruta
      } else {
        alert('Correo o contraseña incorrectos');
      }
    });
  }
});
