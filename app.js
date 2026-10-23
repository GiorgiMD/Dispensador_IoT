// ESCOMCHUCHES · Catálogo de productos y flujo de compra (Android tablet)
(function () {
  "use strict";

  const PRICE_MXN = 5;

  const PRODUCTS = [
    { id: "gomitas",    name: "Gomitas",             emoji: "🍬", accent: "#ff5d8f" },
    { id: "churritos",  name: "Churritos",           emoji: "🥨", accent: "#ff9f1c" },
    { id: "cacahuates", name: "Cacahuates",          emoji: "🥜", accent: "#c98b5a" },
    { id: "chocolates", name: "Chocolates",          emoji: "🍫", accent: "#8d5524" },
    { id: "manguitos",  name: "Manguitos con chile", emoji: "🥭", accent: "#ffca3a" }
  ];

  const productsEl = document.getElementById("products");
  const overlay = document.getElementById("overlay");
  const overlayEmoji = document.getElementById("overlay-emoji");
  const overlayClose = document.getElementById("overlay-close");

  function render() {
    productsEl.innerHTML = PRODUCTS.map(
      (p) => `
      <article class="product" role="listitem" style="--accent: ${p.accent}">
        <button class="product__action" type="button" data-id="${p.id}" aria-label="Comprar ${p.name} por $${PRICE_MXN} MXN">
          <span class="product__badge" aria-hidden="true">${p.emoji}</span>
          <span class="product__name">${p.name}</span>
          <span class="product__price">$${PRICE_MXN} <small>MXN</small></span>
          <span class="product__buy" aria-hidden="true">Comprar</span>
        </button>
      </article>`
    ).join("");
  }

  function buy(product, button) {
    overlayEmoji.textContent = product.emoji;

    if (button) {
      const buyLabel = button.querySelector(".product__buy");
      button.disabled = true;
      if (buyLabel) buyLabel.textContent = "Entregando…";
      setTimeout(() => {
        button.disabled = false;
        if (buyLabel) buyLabel.textContent = "Comprar";
      }, 900);
    }

    setTimeout(() => {
      overlay.hidden = false;
    }, 300);
  }

  function closeOverlay() {
    overlay.hidden = true;
  }

  productsEl.addEventListener("click", (event) => {
    const button = event.target.closest(".product__action");
    if (!button) return;
    const product = PRODUCTS.find((p) => p.id === button.dataset.id);
    if (product) buy(product, button);
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
