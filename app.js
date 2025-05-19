// === Task 1: Class Definitions (Product, Inventory, etc.) ===
// ... Your class code here ...

// === Task 2: Advanced Functions ===

// 1. Closure with arrow functions
const createCounter = (initialValue = 0) => {
  let count = initialValue;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
    reset: () => { count = initialValue; return count; }
  };
};

// 2. Destructuring with function parameters and return
const processUserData = ({ name, age, preferences }) => {
  return {
    displayName: name,
    isAdult: age >= 18,
    theme: preferences.theme
  };
};

// 3. Higher-order function using callbacks
const transformProducts = (products, callback) => {
  return products.map(callback);
};

// 4. Function composition
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const removeSpaces = str => str.replace(/\s+/g, '-');

const slugify = compose(removeSpaces, toLower, trim);

// === App Logic or Testing Area ===
const inventory = new Inventory();

inventory.addProduct(new PhysicalProduct(1, "Backpack", 59.99, 2));
inventory.addProduct(new DigitalProduct(2, "E-book", 9.99, 5));

console.log(inventory.listProducts());

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset());     // 5

const user = {
  name: "Jane Doe",
  age: 24,
  preferences: { theme: "dark" }
};

console.log(processUserData(user));

const productNames = transformProducts(inventory.products, ({ name }) => name);
console.log(productNames);

console.log(slugify("  New Product Launch!  ")); // "new-product-launch!"
