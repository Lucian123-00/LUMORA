function addToCart() {
    const message = document.getElementById("message");

    message.textContent = "✓ Lumora ajouté au panier !";

    setTimeout(() => {
        message.textContent = "";
    }, 3000);
}
