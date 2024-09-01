class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    const total = this.product.price * this.quantity;
    return total;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // to add an item
  addItem(product, quantity) {
    // to check if the product already exists in the cart
    const existingItem = this.items.find(
      (items) => items.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      // otherwise, add a new item to the cart
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  //   to remove an item
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  //   to get the total of an item
  getTotalItems() {
    return this.items.length;
  }

  //   to get the totl price
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  //   display values on the console
  displayCart() {
    console.log("Cart Items:");
    this.items.forEach((item) => {
      console.log(
        `Product: ${item.product.name}, Quantity: ${
          item.quantity
        }, Total: $${item.getTotalPrice()}`
      );
    });
    console.log(`Total Price: $${this.getTotalPrice()}`);
  }
}

// Create some products
const product1 = new Product(1, "Shoe", 1200);
const product2 = new Product(2, "Phone", 800);
const product3 = new Product(3, "Standing-Fan", 150);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2);

// Display the cart again to see the changes
cart.displayCart();
