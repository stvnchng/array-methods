class Cart {
  constructor(items) {
    //
    this.items = {};
    for (const item of items) {
      items[item] = new Set();
    }
  }
}

class Item {}

class Coupon {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }
}
