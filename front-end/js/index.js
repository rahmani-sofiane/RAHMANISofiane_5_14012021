"use strict";
// Génération de l'API

getMain();

async function getMain() {
  const articles = await getArticles();
  displayArticles(articles);
}

function getArticles() {
  return fetch("http://localhost:3000/api/teddies")
    .then(function (httpBodyResponse) {
      return httpBodyResponse.json();
    })
    .then(function (articles) {
      console.log(articles);
      return articles;
    });
}

function displayArticles() {
  document.getElementById("main");
}

const displayCaptionElement = function () {
  document.querySelector(".name-product").textContent = ;
};
