// LAS CHUCHESCOM · Catálogo de productos y flujo de compra
(function () {
  "use strict";

  const PRICE_MXN = 5;

  const PRODUCTS = [
    { id: "gomitas",   name: "Gomitas",            emoji: "🍬", accent: "#ff5d8f" },
    { id: "churritos", name: "Churritos",          emoji: "🥨", accent: "#ff9f1c" },
    { id: "cacahuates",name: "Cacahuates",         emoji: "🥜", accent: "#c98b5a" },
    { id: "chocolates",name: "Chocolates",         emoji: "🍫", accent: "#8d5524" },
    { id: "manguitos", name: "Manguitos con chile",emoji: "🥭", accent: "#ffca3a" }
  ];

  const productsEl = document.getElementById("products");
  const overlay = document.getElementById("overlay");
  const overlayEmoji = document.getElementById("overlay-emoji");
  const overlayClose = document.getElementById("overlay-close");

  function render() {
    productsEl.innerHTML = PRODUCTS.map(
      (p) => `
      <article class="product" role="listitem" style="--accent: ${p.accent}">
        <div class="product__badge" aria-hidden="true">${p.emoji}</div>
        <h3 class="product__name">${p.name}</h3>
        <p class="product__price">$${PRICE_MXN} <span>MXN</span></p>
        <button class="product__buy" type="button" data-id="${p.id}">Comprar</button>
      </article>`
    ).join("");
  }

  function buy(product) {
    overlayEmoji.textContent = product.emoji;

    // Pequeña espera para simular la entrega del producto.
    const buyButton = productsEl.querySelector(
      `[data-id="${product.id}"]`
    );
    if (buyButton) {
      buyButton.disabled = true;
      buyButton.textContent = "Entregando…";
      setTimeout(() => {
        buyButton.disabled = false;
        buyButton.textContent = "Comprar";
      }, 900);
    }

    setTimeout(() => {
      overlay.hidden = false;
    }, 320);
  }

  function closeOverlay() {
    overlay.hidden = true;
  }

  productsEl.addEventListener("click", (event) => {
    const button = event.target.closest(".product__buy");
    if (!button) return;
    const product = PRODUCTS.find((p) => p.id === button.dataset.id);
    if (product) buy(product);
  });

  overlayClose.addEventListener("click", closeOverlay);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeOverlay();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) closeOverlay();
  });

  render();
})();
