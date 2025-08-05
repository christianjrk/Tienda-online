# 🌍 Tienda Solidaria

Bienvenido a **Tienda Solidaria**, un proyecto web de e-commerce diseñado para vender productos solidarios cuya recaudación está destinada a apoyar causas ambientales y sociales.  

Este proyecto está desarrollado con **HTML, CSS y JavaScript**, organizando la lógica en controladores, modelos, utilidades y redux para un manejo más claro y escalable.  

---

## ✨ Funcionalidades principales

- 🛒 **Carrito de compras dinámico**: añadir, eliminar, incrementar o decrementar productos.
- 👤 **Registro e inicio de sesión** con almacenamiento en `localStorage`.
- 📄 **Perfil de usuario** editable.
- 📦 **Creación de productos** desde la vista de administrador.
- 📊 **Dashboard** para acceder al panel del usuario.
- ✅ **Persistencia en el navegador** gracias al uso de `localStorage`.
- 🎨 **Diseño responsive y amigable**.

---

## 📂 Estructura del Proyecto

Tienda-online/
│
├── css/
│ └── styles.css # Estilos globales
│
├── imagenes/ # Recursos gráficos (productos y capturas)
│
├── js/
│ ├── controllers/ # Controladores (manejo de lógica y eventos)
│ │ ├── auth.controller.js
│ │ ├── carrito.controller.js
│ │ ├── dashboard.controller.js
│ │ ├── home.controllers.js
│ │ ├── login.controller.js
│ │ ├── profile.controller.js
│ │ └── register.controller.js
│ │
│ ├── models/ # Modelos de datos
│ │ ├── carrito.model.js
│ │ ├── productos.model.js
│ │ └── usuario.model.js
│ │
│ ├── redux/ # Estado global con Redux
│ │ ├── carrito.slice.js
│ │ └── store.js
│ │
│ ├── test/ # Pruebas unitarias
│ │ └── usuario.model.test.js
│ │
│ ├── utils/ # Funciones auxiliares
│ │ ├── jsStorage.js
│ │ └── validaciones.js
│ │
│ └── script.js # Script principal
│
├── pages/ # Páginas HTML
│ ├── carrito.html
│ ├── crear-producto.html
│ ├── dashboard.html
│ ├── form-login.html
│ ├── form-register.html
│ └── profile.html
│
├── index.html # Página principal
├── README.md # Documentación del proyecto


---

## 🚀 Despliegue

Puedes ver la página en línea en el siguiente enlace:  
👉 [Demo en Netlify](https://tienda-online-1.netlify.app/)  

*(Sustituye el link con tu URL de Netlify cuando lo despliegues)*

---

## 🛠️ Tecnologías utilizadas

- **HTML5**
- **CSS3** (Responsive, Flexbox, Grid)
- **JavaScript (ES6+)**
- **LocalStorage**
- **Redux (estructura simulada para manejo de estado)**
- **Pruebas unitarias con JS**

---

## 👨‍💻 Autor

Proyecto creado por **Christian Jaramillo Rotavisky**  
© 2025 Noticias Salvajes. Todos los derechos reservados.

---

