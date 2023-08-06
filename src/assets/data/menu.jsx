export const menu = [
  {
    sectionName: "Coffee",
    items: [
      {
        id: generateUniqueId(),
        title: "Espresso",
        price: 2,
        description: "",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Cappuccino",
        price: 3,
        description: "",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Americano",
        price: 3,
        description: "",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Latte",
        price: 4,
        description: "",
        currency: "BAM",
      },
    ],
  },
  {
    sectionName: "Pizza",
    items: [
      {
        id: generateUniqueId(),
        title: "Margherita",
        price: 8,
        description: "Tomato sauce, mozzarella, basil",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Pepperoni",
        price: 10,
        description: "Tomato sauce, mozzarella, pepperoni",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Vegetarian",
        price: 9,
        description: "Tomato sauce, mozzarella, vegetables",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Hawaiian",
        price: 10,
        description: "Tomato sauce, mozzarella, ham, pineapple",
        currency: "BAM",
      },
    ],
  },
  {
    sectionName: "Pasta",
    items: [
      {
        id: generateUniqueId(),
        title: "Spaghetti Carbonara",
        price: 12,
        description: "Pasta, eggs, pancetta, cheese",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Penne Arrabiata",
        price: 10,
        description: "Pasta, spicy tomato sauce",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Fettuccine Alfredo",
        price: 11,
        description: "Pasta, creamy cheese sauce",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Lasagna",
        price: 13,
        description: "Layers of pasta, meat, and cheese",
        currency: "BAM",
      },
    ],
  },
  {
    sectionName: "Desserts",
    items: [
      {
        id: generateUniqueId(),
        title: "Chocolate Cake",
        price: 6,
        description: "Rich and moist chocolate cake",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Cheesecake",
        price: 5,
        description: "Creamy and delicious cheesecake",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Tiramisu",
        price: 7,
        description: "Coffee-flavored Italian dessert",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Fruit Tart",
        price: 4,
        description: "Butter pastry with fresh fruits",
        currency: "BAM",
      },
    ],
  },
  {
    sectionName: "Milkshakes",
    items: [
      {
        id: generateUniqueId(),
        title: "Chocolate Milkshake",
        price: 4,
        description: "Creamy chocolate-flavored milkshake",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Strawberry Milkshake",
        price: 4,
        description: "Refreshing strawberry-flavored milkshake",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Vanilla Milkshake",
        price: 4,
        description: "Classic vanilla-flavored milkshake",
        currency: "BAM",
      },
      {
        id: generateUniqueId(),
        title: "Banana Milkshake",
        price: 4,
        description: "Creamy banana-flavored milkshake",
        currency: "BAM",
      },
    ],
  },
];


// Function to generate a random ID
function generateUniqueId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
