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

// === Task 4: Real-World JavaScript Patterns ===
const user = {
  id: 101,
  firstName: "Alex",
  lastName: "Johnson",
  email: "alex@example.com",
  role: "admin",
  preferences: {
    theme: "dark",
    notifications: true
  }
};

const { firstName, lastName, preferences: { theme }, ...rest } = user;
console.log(`${firstName} ${lastName} prefers the ${theme} theme.`);
// Outputs: Alex Johnson prefers the dark theme.

const isLoggedIn = true;
const welcomeMsg = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(welcomeMsg); // "Welcome back!"

const greetUser = name => `Hello, ${name}!`;
console.log(greetUser("Chris")); // "Hello, Chris!"

const users = [
  { id: 1, name: "Amy", status: "active" },
  { id: 2, name: "Ben", status: "inactive" },
  { id: 3, name: "Cara", status: "active" }
];

const activeUsers = users.filter(user => user.status === "active");
const userNames = activeUsers.map(user => user.name);

console.log(userNames); // ["Amy", "Cara"]

console.log("Fetching data...");
setTimeout(() => {
  console.log("Data loaded!");
}, 2000); // Waits 2 seconds before displaying
