let cartQuantity = 0;
const productPrice = 79.90;

function addToCart() {
    cartQuantity++;

    updateCart();

    const message = document.getElementById("message");

    message.textContent = "✓ Lumora ajouté au panier !";

    setTimeout(() => {
        message.textContent = "";
    }, 3000);

    openCart();
}

function updateCart() {
    const count = document.getElementById("cart-count");
    const items = document.getElementById("cart-items");
    const total = document.getElementById("cart-total");

    count.textContent = cartQuantity;

    if (cartQuantity === 0) {
        items.innerHTML = `
            <div class="empty-cart">
                Votre panier est vide.
            </div>
        `;

        total.textContent = "0,00 €";
        return;
    }

    const totalPrice = productPrice * cartQuantity;

    items.innerHTML = `
        <div class="cart-item">

            <div class="cart-item-info">
                <strong>Lumora Signature</strong>
                <span>${productPrice.toFixed(2).replace(".", ",")} € × ${cartQuantity}</span>
            </div>

            <button class="cart-remove" onclick="removeFromCart()">
                Supprimer
            </button>

        </div>
    `;

    total.textContent =
        totalPrice.toFixed(2).replace(".", ",") + " €";
}

function removeFromCart() {
    cartQuantity = 0;
    updateCart();
}

function toggleCart() {
    const cart = document.getElementById("cart");
    const overlay = document.getElementById("cart-overlay");

    cart.classList.toggle("active");
    overlay.classList.toggle("active");
}

function openCart() {
    const cart = document.getElementById("cart");
    const overlay = document.getElementById("cart-overlay");

    cart.classList.add("active");
    overlay.classList.add("active");
}

function checkout() {
    if (cartQuantity === 0) {
        alert("Votre panier est vide.");
        return;
    }

    alert("Le paiement sera bientôt disponible.");
}
