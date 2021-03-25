"use strict";

// Function to get the list of products from API

let getProductsListAPI = function () {
  return fetch(`http://localhost:3000/api/teddies`)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let teddiesList = [];
      let apiDatas = response;
      console.log(apiDatas);
      for (let i = 0; i < apiDatas.length; i++) {
        teddiesList.push(
          new Teddy(
            apiDatas[i].colors,
            apiDatas[i]._id,
            apiDatas[i].name,
            apiDatas[i].price,
            apiDatas[i].imageUrl,
            apiDatas[i].description
          )
        );
        console.log(teddiesList);
      }
      return teddiesList;
    });
};

// Function to display products

let displayProductsList = async function () {
  let productsListAPI = await getProductsListAPI();
  for (let i = 0; i < productsListAPI.length; i++) {
    const product = productsListAPI[i];

    let productsListRow = document.getElementById("productList");

    let productWrapper = document.createElement("div");
    productWrapper.classList.add(
      "col-12",
      "col-md-6",
      "col-lg-4",
      "productWrapper"
    );
    productsListRow.appendChild(productWrapper);

    let imgWrapper = document.createElement("figure");
    imgWrapper.classList.add("imgWrapper");
    productWrapper.appendChild(imgWrapper);

    let linkTeddy = document.createElement("a");
    linkTeddy.href = `pages/product_page.html?id=${product._id}`;
    imgWrapper.appendChild(linkTeddy);

    let imgTeddy = document.createElement("img");
    imgTeddy.src = product.imageUrl;
    linkTeddy.appendChild(imgTeddy);

    let figcaptionImg = document.createElement("figcaption");
    productWrapper.appendChild(figcaptionImg);

    let productName = document.createElement("p");
    productName.textContent = product.name;
    figcaptionImg.appendChild(productName);

    let productPrice = document.createElement("p");
    productPrice.textContent = product.price;
    figcaptionImg.appendChild(productPrice);
  }
};

// Calling the function to display products

displayProductsList();
