class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
    
    getDisplayPrice() {
      return `$${this.price.toFixed(2)}`;
    }
  }
  
  class DigitalProduct extends Product {
    constructor(id, name, price, downloadSize) {
      super(id, name, price);
      this.downloadSize = downloadSize;
    }
    
    // Override parent method with specialized behavior
    getDisplayPrice() {
      return `${super.getDisplayPrice()} (Digital Download)`;
    }
  }