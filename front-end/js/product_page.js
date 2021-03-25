"use strict";

// Function to get the productId associated

function getProductId() {
  return new URL(window.location.href).searchParams.get("id");
}

// Function to get the datas of one product from API

let getProductsListAPI = function (productId) {
  return fetch(`http://localhost:3000/api/teddies/${productId}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let apiDatas = response;
      return new Teddy(
        apiDatas.colors,
        apiDatas._id,
        apiDatas.name,
        apiDatas.price,
        apiDatas.imageUrl,
        apiDatas.description
      );
    });
};

// Function to display the product

let displayProduct = async function () {
  const productId = getProductId();
  let product = await getProductsListAPI(productId);
  displayProductDatas(product);
  console.log(product.__proto__);
  console.log(product);
};

function displayProductDatas(product) {
  document.getElementById("productPageImage").src = product.imageUrl;
  document.getElementsByClassName("productName").textContent = product.name;
  document.getElementsByClassName("productDescription").textContent =
    product.description;
  document.getElementsByClassName("productPrice").textContent = product.price;

  for (let i = 0; i < product.colors.length; i++) {
    let colors = product.colors[i];
    displayColors(colors);
  }
}

// Function to display colors

let displayColors = function (colors) {
  const options = document.createElement("option");
  let sectionSelectColor = document.getElementById("sectionSelectColor");
  options.textContent = colors;
  sectionSelectColor.appendChild(options);
};

// Calling the function to display the product
displayProduct();

// Fonction permettant d'ajouter une article à la page panier

const detectAddToCart = document.getElementById("btnAddToCart");
detectAddToCart.addEventListener("click", function (event) {
  detectAddToCart.textContent = "Produits ajouté au panier";
  let buttonAddToCartClicked = event.target;
  console.log(buttonAddToCartClicked);
});
