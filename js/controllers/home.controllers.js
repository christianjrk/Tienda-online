document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.getElementById('cart-icon');
  const cartPanel = document.getElementById('cart-panel');
  const cartClose = document.getElementById('cart-close');
  const cartCount = document.getElementById('cart-count');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Mostrar panel del carrito
  cartIcon?.addEventListener('click', () => {
    cartPanel.classList.add('open');
    renderCart();
  });

  // Cerrar panel del carrito
  cartClose?.addEventListener('click', () => {
    cartPanel.classList.remove('open');
  });

  // Agregar al carrito
  document.querySelectorAll('.btn-add-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const productCard = button.closest('.product-card');
      const title = productCard.querySelector('h3').textContent;
      const price = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
      const img = productCard.querySelector('img').src;

      const existing = cart.find(item => item.id === id);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ id, title, price, img, quantity: 1 });
      }

      saveCart();
      renderCart();
    });
  });

  // Proceder al pago
  checkoutBtn?.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Tu carrito está vacío.');
      return;
    }

    alert('Gracias por tu compra 😊. ¡Procesando pedido!');
    cart = [];
    saveCart();
    renderCart();
  });

  // Guardar en localStorage
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Renderizar carrito
  function renderCart() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
      cartTotal.textContent = '0.00';
      cartCount.textContent = '0';
      checkoutBtn.disabled = true;
      return;
    }

    cart.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.classList.add('cart-item');
      itemEl.innerHTML = `
        <img src="${item.img}" alt="${item.title}" width="50" />
        <div>
          <h4>${item.title}</h4>
          <p>Cantidad: ${item.quantity}</p>
          <p>Precio: $${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      `;
      cartItemsContainer.appendChild(itemEl);
    });

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    checkoutBtn.disabled = false;
  }

  // Cargar carrito si ya había datos
  renderCart();
});
