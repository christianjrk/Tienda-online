document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.getElementById('cart-icon');
  const cartPanel = document.getElementById('cart-panel');
  const cartClose = document.getElementById('cart-close');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  const addCartButtons = document.querySelectorAll('.btn-add-cart');

  const productos = {
    articulo1: { id: 'articulo1', nombre: 'Camiseta “Elefantes Unidos”', precio: 18.00, imagen: 'imagenes/camiseta elefante.jpeg' },
    articulo2: { id: 'articulo2', nombre: 'Taza “Salva a los Tigres”', precio: 12.50, imagen: 'imagenes/taza de tigre.jpg' },
    articulo3: { id: 'articulo3', nombre: 'Gorra “Protege los Océanos”', precio: 15.00, imagen: 'imagenes/gorra de oceano.jpg' },
    articulo4: { id: 'articulo4', nombre: 'Póster “Aves Libres”', precio: 8.00, imagen: 'imagenes/poster de aves.webp' },
    articulo5: { id: 'articulo5', nombre: 'Bolsa “Adopta un Árbol”', precio: 10.00, imagen: 'imagenes/bolsa mensaje.jpg' },
    articulo6: { id: 'articulo6', nombre: 'Llavero “Salva la Fauna”', precio: 5.00, imagen: 'imagenes/llavero de gato.jpg' },
    articulo7: { id: 'articulo7', nombre: 'Libreta “Bosque Vivo”', precio: 9.00, imagen: 'imagenes/libreta ecologica.webp' },
    articulo8: { id: 'articulo8', nombre: 'Calcetines “Amigos del Oso Polar”', precio: 7.50, imagen: 'imagenes/calcetines oso.jpg' },
    articulo9: { id: 'articulo9', nombre: 'Pegatina “Salva los Corales”', precio: 3.00, imagen: 'imagenes/pegatina coral.jpg' },
    articulo10: { id: 'articulo10', nombre: 'Botella “Agua Limpia para Todos”', precio: 22.00, imagen: 'imagenes/botella.jpg' }
  };

  let carrito = JSON.parse(localStorage.getItem('carrito')) || {};

  function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function actualizarContador() {
    const cantidad = Object.values(carrito).reduce((acc, item) => acc + item.cantidad, 0);
    cartCount.textContent = cantidad;
  }

  function calcularTotal() {
    return Object.values(carrito)
      .reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  function renderizarCarrito() {
    cartItemsContainer.innerHTML = '';

    if (Object.keys(carrito).length === 0) {
      cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
      cartTotal.textContent = '0.00';
      return;
    }

    for (const id in carrito) {
      const item = carrito[id];
      const div = document.createElement('div');
      div.classList.add('cart-item');

      div.innerHTML = `
        <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4>${item.nombre}</h4>
          <p>Precio: $${item.precio.toFixed(2)}</p>
          <p>Cantidad: ${item.cantidad}</p>
          <div class="cart-item-actions">
            <button class="btn-increment" data-id="${id}">+</button>
            <button class="btn-decrement" data-id="${id}">-</button>
            <button class="btn-remove" data-id="${id}">Eliminar</button>
          </div>
        </div>
      `;

      cartItemsContainer.appendChild(div);
    }

    cartTotal.textContent = calcularTotal().toFixed(2);

    // Eventos de botones
    const btnIncrement = cartItemsContainer.querySelectorAll('.btn-increment');
    const btnDecrement = cartItemsContainer.querySelectorAll('.btn-decrement');
    const btnRemove = cartItemsContainer.querySelectorAll('.btn-remove');

    btnIncrement.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        carrito[id].cantidad++;
        guardarCarrito();
        renderizarCarrito();
        actualizarContador();
      });
    });

    btnDecrement.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        if (carrito[id].cantidad > 1) {
          carrito[id].cantidad--;
        } else {
          delete carrito[id];
        }
        guardarCarrito();
        renderizarCarrito();
        actualizarContador();
      });
    });

    btnRemove.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        delete carrito[id];
        guardarCarrito();
        renderizarCarrito();
        actualizarContador();
      });
    });
  }

  function agregarAlCarrito(id) {
    if (carrito[id]) {
      carrito[id].cantidad++;
    } else {
      carrito[id] = { ...productos[id], cantidad: 1 };
    }
    guardarCarrito();
    renderizarCarrito();
    actualizarContador();
  }

  addCartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      agregarAlCarrito(id);
      if (!cartPanel.classList.contains('open')) {
        abrirCarrito();
      }
    });
  });

  function abrirCarrito() {
    cartPanel.classList.add('open');
  }

  function cerrarCarrito() {
    cartPanel.classList.remove('open');
  }

  cartIcon.addEventListener('click', abrirCarrito);
  cartClose.addEventListener('click', cerrarCarrito);

  checkoutBtn.addEventListener('click', () => {
    if (Object.keys(carrito).length === 0) {
      alert('El carrito está vacío. Añade productos para proceder al pago.');
      return;
    }
    alert('Gracias por tu compra!');
    carrito = {};
    guardarCarrito();
    renderizarCarrito();
    actualizarContador();
    cerrarCarrito();
  });

  // Inicializar
  renderizarCarrito();
  actualizarContador();
});
