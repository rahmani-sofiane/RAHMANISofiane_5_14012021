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

// fetch(`http://localhost:3000/api/teddies`)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (json) {
//     return json;
//     // for(let i = 0, i < productsList.length, i++){
//     //   apiData.productsList.push(new productsList(apiData))
//     //       console.log(apiData);
//     // }
//   });
