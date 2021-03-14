"use strict";

// Récupération du produit associé

function getProductId() {
  return new URL(window.location.href).searchParams.get("id");
}

// Récupération du produit avec l'id associé depuis le serveur

function getProduct(productId) {
  return fetch(
    `http://localhost:3000/api/teddies/${productId}`
  ).then((response) => response.json());
}

// Display des articles

getMain();

async function getMain() {
  const productId = getProductId();
  const product = await getProduct(productId);
  function displayProduct(product) {
    document.getElementsByClassName("productImage")[0].src = product.imageUrl;
    document.getElementsByClassName("productName")[0].textContent =
      product.name;
    document.getElementsByClassName("productDescription")[0].textContent =
      product.description;
    document.getElementsByClassName("productPrice")[0].textContent =
      product.price + ` $`;
    console.log(product.price);
  }
  displayProduct(product);

  // Fonction permettant d'afficher le choix de couleur

  for (let i = 0; i < product.colors.length; i++) {
    let color = product.colors[i];
    function displayColors(color) {
      const options = document.createElement("option");
      let sectionSelectColor = document.getElementById("sectionSelectColor");
      options.textContent = color;
      sectionSelectColor.appendChild(options);
    }
    displayColors(color);
  }
}

// Fonction permettant de mettre à jour le prix en fonction de la quantité

function updatePrice() {
  let price = document.getElementsByClassName("productPrice");
  console.log(price);
  let quantity = document.getElementById("sectionSelectQty");
  console.log(quantity);
}

// function updatePrice(price) {
//   let priceContainer = parseFloat(
//     document.getElementsByClassName("productPrice")
//   );
//   let quantityContainer = parseFloat(
//     document.getElementsByClassName("selectQty")
//   );
//   console.log(priceContainer, quantityContainer);
//   let quantity = quantityContainer.value;
//   let price = priceContainer * quantityContainer;
// }
// updatePrice(price);

// Fonction permettant d'ajouter une article à la page panier

const detectAddToCart = document.getElementById("btnAddToCart");
detectAddToCart.addEventListener("click", function (event) {
  detectAddToCart.textContent = "Produits ajouté au panier";
  let buttonAddToCartClicked = event.target;
  console.log(buttonAddToCartClicked);
});
