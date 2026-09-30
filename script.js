function addToCart() {
    const message = document.getElementById("message");

    message.textContent = "✓ Lumora ajouté au panier !";

    setTimeout(() => {
        message.textContent = "";
    }, 3000);
}
/* =========================
   PANIER LUMORA
========================= */

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cart-button {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  padding: 11px 16px;
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: 0.25s;
}

.cart-button:hover {
  background: var(--text);
  color: white;
}

.cart-button span {
  margin-left: 4px;
  font-weight: 700;
}

.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 998;
}

.cart-overlay.active {
  opacity: 1;
  visibility: visible;
}

.cart {
  position: fixed;
  top: 0;
  right: -420px;
  width: 390px;
  max-width: 90%;
  height: 100vh;
  background: var(--background);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
  z-index: 999;
  padding: 28px;
  display: flex;
  flex-direction: column;
  transition: right 0.35s ease;
}

.cart.active {
  right: 0;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.cart-header h2 {
  margin: 0;
  font-family: "Playfair Display", serif;
}

.cart-header button {
  border: none;
  background: none;
  font-size: 22px;
  cursor: pointer;
}

#cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 25px 0;
}

.empty-cart {
  color: var(--muted);
  text-align: center;
  padding-top: 50px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 18px 0;
  border-bottom: 1px solid var(--border);
}

.cart-item-info {
  flex: 1;
}

.cart-item-info strong {
  display: block;
  margin-bottom: 5px;
}

.cart-item-info span {
  color: var(--muted);
  font-size: 14px;
}

.cart-remove {
  border: none;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-size: 14px;
}

.cart-remove:hover {
  color: #a33;
}

.cart-footer {
  border-top: 1px solid var(--border);
  padding-top: 20px;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 18px;
}

.checkout-button {
  width: 100%;
  border: none;
  background: var(--text);
  color: white;
  padding: 15px;
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: 0.25s;
}

.checkout-button:hover {
  background: var(--gold);
}


/* MOBILE */

@media (max-width: 800px) {

  .header-actions {
    gap: 6px;
  }

  .nav-button {
    display: none;
  }

  .cart-button {
    padding: 9px 13px;
    font-size: 13px;
  }

  .cart {
    width: 350px;
    padding: 22px;
  }

}
