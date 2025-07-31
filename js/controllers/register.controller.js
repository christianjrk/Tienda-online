document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('form-register');

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = registerForm.querySelector('#register-name').value.trim();
      const email = registerForm.querySelector('#register-email').value.trim();
      const password = registerForm.querySelector('#register-password').value.trim();
      const confirm = registerForm.querySelector('#register-confirm').value.trim();

      if (!name || !email || !password || !confirm) {
        alert('Todos los campos son obligatorios.');
        return;
      }

      if (password !== confirm) {
        alert('Las contraseñas no coinciden.');
        return;
      }

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const emailExists = users.some(u => u.email === email);

      if (emailExists) {
        alert('Este correo ya está registrado.');
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      window.location.href = 'form-login.html'; // Asumiendo mismo folder 'pages'
    });
  }
});
