"use strict";

// Modifier classe

class Teddy {
  constructor(colors, _id, name, price, imageUrl, description) {
    this.colors = colors;
    this._id = _id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  // Method to format price
  formatPrice() {
    return this.price / 100 + (this.price % 100);
  }
}

// class Cart {
//   constructor() {}
// }
