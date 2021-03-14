// "use strict";

getMain();

async function getMain() {
  const products = await getProducts();
  console.log(products);
  // Boucle pour récupére toutes les variables des produits
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    function displayProducts(product) {
      document.getElementsByClassName("productImage")[i].src = product.imageUrl;
      document.getElementsByClassName("productName")[i].textContent =
        product.name;
      document.getElementsByClassName("productPrice")[i].textContent =
        product.price + ` $`;
      document.getElementsByClassName("productLink")[
        i
      ].href = `pages/product_page.html?id=${product._id}`;
    }
    displayProducts(product);
  }
}

function getProducts() {
  return fetch("http://localhost:3000/api/teddies").then(function (response) {
    return response.json();
  });
}
