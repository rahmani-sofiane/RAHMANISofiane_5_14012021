"use strict";

// class list

class Teddies {
  constructor(_id, name, price, imageUrl, description, colors) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this.colors = colors;
  }
}

fetch(`http://localhost:3000/api/teddies`)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    let teddiesList = [];
    let apiData = response;
    for (let i = 0; i < apiData.length; i++) {
      const teddy = apiData[i];
      console.log(teddy);
      teddiesList.push(new Teddies(teddy[i]));
      console.log(teddiesList);
      return teddiesList;
    }
  });
