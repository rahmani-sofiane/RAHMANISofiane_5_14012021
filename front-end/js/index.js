"use strict";

async function getMain() {
  const products = await getProducts();
  displayProducts(products);
}

function getProducts() {
  return fetch("http://localhost:3000/api/teddies")
    .then(function (httpBodyResponse) {
      return httpBodyResponse.json();
    })
    .then(function (products) {
      return products;
    });
}

function displayProducts(products) {
  document.getElementsByClassName("productsImage").src = products.imageUrl;
  document.getElementsByClassName("productsName").textContent = products.name;
  document.getElementsByClassName("productsDescription").textContent =
    products.description;
  document.getElementsByClassName("productsPrice").textContent = products.price;
  console.log(products);
}
getMain();
