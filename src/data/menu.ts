import { Food } from "../types/food";

// Savory Dishes
import americanRice from "../assets/images/savory-dishes/american-fried-rice.jpg";
import avocadoToast from "../assets/images/savory-dishes/avocado-salmon-and-egg-toast.jpg";
import croissant from "../assets/images/savory-dishes/bacon-and-cheese-croissant-sandwich.jpg";
import grilledBeefSteak from "../assets/images/savory-dishes/grilled-beef-steak-with-fries-and-salad.jpg";
import grilledSalmon from "../assets/images/savory-dishes/grilled-salmon-with-avocado-salad.jpg";
import mexicanTaco from "../assets/images/savory-dishes/mexican-taco.png";
import pepperoniPizza from "../assets/images/savory-dishes/pepperoni-mushroom-pizza.jpg";
import shrimpPadThai from "../assets/images/savory-dishes/shrimp-pad-thai-wrapped-in-egg.jpg";
import shrimpRicePlate from "../assets/images/savory-dishes/shrimp-rice-plate-with-fried-egg-vegetables.jpg";

// Beverages
import appleJuice from "../assets/images/beverages/apple-juice.jpg";
import bananaMilk from "../assets/images/beverages/banana-milk.jpg";
import blueberrySoda from "../assets/images/beverages/blueberry-soda.jpg";
import bottledWater from "../assets/images/beverages/bottled-water.jpg";
import cola from "../assets/images/beverages/cola.jpg";
import lemonade from "../assets/images/beverages/lemonade.jpg";
import orangeJuice from "../assets/images/beverages/orange-juice.jpg";
import strawberrySmoothie from "../assets/images/beverages/strawberry-smoothie.jpg";

// Desserts
import blueberryCheesePie from "../assets/images/desserts/blueberry-cheese-pie.jpg";
import chocolateBrownie from "../assets/images/desserts/chocolate-brownie.jpg";
import chocolateCake from "../assets/images/desserts/chocolate-cake.jpg";
import matchaIceCream from "../assets/images/desserts/matcha-ice-cream.jpg";
import melonBingsu from "../assets/images/desserts/melon-bingsu.jpg";
import screenshotDessert from "../assets/images/desserts/Screenshot 2026-07-12 162830.jpg";
import softChocolateChipCookie from "../assets/images/desserts/soft-chocolate-chip-cookie.jpg";
import strawberryMacaron from "../assets/images/desserts/strawberry-macaron-with-cream-cheese-filling.jpg";
import strawberrySwissRoll from "../assets/images/desserts/strawberry-swiss-roll.jpg";

// Light Bites
import cheeseCroquettes from "../assets/images/light-bites/cheese-filled-croquettes-with-sauce.jpg";
import cornDog from "../assets/images/light-bites/corn-dog.jpg";
import fortuneCookie from "../assets/images/light-bites/fortune-cookie.jpg";
import grilledPorkSkewers from "../assets/images/light-bites/grilled-pork-skewers-with-sauce-and-vegetables.jpg";
import nutritiousCroquetas from "../assets/images/light-bites/nutritious-croquetas-delight.jpg";
import thaiFishCakes from "../assets/images/light-bites/thai-fish-cakes-with-sauce.jpg";

// Soups
import cornSoup from "../assets/images/soups/corn-soup.jpg";
import misoSoup from "../assets/images/soups/miso-soup.jpg";
import pumpkinSoup from "../assets/images/soups/pumpkin-soup.jpg";
import spinachSoup from "../assets/images/soups/spinach-soup.jpg";
import thaiGreenCurry from "../assets/images/soups/thai-green-curry-with-chicken.jpg";
import tomatoSoup from "../assets/images/soups/tomato-soup.jpg";
import tomYumGoong from "../assets/images/soups/tom-yum-goong.jpg";

export const menuList: Food[] = [
  // =====================
  // Savory Dishes
  // =====================
  {
    id: "1",
    name: "American Fried Rice",
    description:
      "Thai-style fried rice served with sausage, ham, raisins, and a fried egg.",
    category: "Savory Dishes",
    price: 169,
    image: americanRice,
  },
  {
    id: "2",
    name: "Avocado Salmon Toast",
    description:
      "Toasted artisan bread topped with avocado, smoked salmon, and a perfectly cooked egg.",
    category: "Savory Dishes",
    price: 199,
    image: avocadoToast,
  },
  {
    id: "3",
    name: "Croissant Sandwich",
    description:
      "Fresh buttery croissant filled with crispy bacon, cheddar cheese, and fresh vegetables.",
    category: "Savory Dishes",
    price: 179,
    image: croissant,
  },
  {
    id: "4",
    name: "Grilled Beef Steak",
    description:
      "Juicy grilled beef steak served with crispy French fries and a fresh garden salad.",
    category: "Savory Dishes",
    price: 329,
    image: grilledBeefSteak,
  },
  {
    id: "5",
    name: "Grilled Salmon Salad",
    description:
      "Grilled Norwegian salmon served with avocado, mixed greens, and a light lemon dressing.",
    category: "Savory Dishes",
    price: 289,
    image: grilledSalmon,
  },
  {
    id: "6",
    name: "Mexican Taco",
    description:
      "Soft tortillas filled with seasoned beef, fresh vegetables, salsa, and melted cheese.",
    category: "Savory Dishes",
    price: 159,
    image: mexicanTaco,
  },
  {
    id: "7",
    name: "Pepperoni Mushroom Pizza",
    description:
      "Stone-baked pizza topped with pepperoni, mushrooms, mozzarella cheese, and tomato sauce.",
    category: "Savory Dishes",
    price: 259,
    image: pepperoniPizza,
  },
  {
    id: "8",
    name: "Shrimp Pad Thai",
    description:
      "Traditional Thai stir-fried rice noodles with prawns, wrapped in a thin egg sheet.",
    category: "Savory Dishes",
    price: 189,
    image: shrimpPadThai,
  },
  {
    id: "9",
    name: "Shrimp Rice Plate",
    description:
      "Steamed jasmine rice served with stir-fried shrimp, vegetables, and a sunny-side-up egg.",
    category: "Savory Dishes",
    price: 179,
    image: shrimpRicePlate,
  },

  // =====================
  // Beverages
  // =====================
  {
    id: "10",
    name: "Apple Juice",
    description:
      "Fresh apple juice with a naturally sweet and refreshing taste.",
    category: "Beverages",
    price: 79,
    image: appleJuice,
  },
  {
    id: "11",
    name: "Banana Milk",
    description: "Creamy banana milk made with fresh bananas and milk.",
    category: "Beverages",
    price: 69,
    image: bananaMilk,
  },
  {
    id: "12",
    name: "Blueberry Soda",
    description: "Sparkling blueberry soda with a sweet fruity flavor.",
    category: "Beverages",
    price: 89,
    image: blueberrySoda,
  },
  {
    id: "13",
    name: "Bottled Water",
    description: "Pure drinking water served chilled.",
    category: "Beverages",
    price: 25,
    image: bottledWater,
  },
  {
    id: "14",
    name: "Cola",
    description: "Classic cola soft drink served cold.",
    category: "Beverages",
    price: 45,
    image: cola,
  },
  {
    id: "15",
    name: "Lemonade",
    description: "Fresh lemonade with a sweet and sour flavor.",
    category: "Beverages",
    price: 79,
    image: lemonade,
  },
  {
    id: "16",
    name: "Orange Juice",
    description: "Fresh orange juice rich in citrus flavor.",
    category: "Beverages",
    price: 79,
    image: orangeJuice,
  },
  {
    id: "17",
    name: "Strawberry Smoothie",
    description: "Smooth strawberry smoothie blended with fresh strawberries.",
    category: "Beverages",
    price: 99,
    image: strawberrySmoothie,
  },

  // =====================
  // Desserts
  // =====================
  {
    id: "18",
    name: "Blueberry Cheese Pie",
    description: "Creamy cheese pie topped with blueberry sauce.",
    category: "Desserts",
    price: 129,
    image: blueberryCheesePie,
  },
  {
    id: "19",
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie with a soft texture.",
    category: "Desserts",
    price: 99,
    image: chocolateBrownie,
  },
  {
    id: "20",
    name: "Chocolate Cake",
    description: "Moist chocolate cake with a rich cocoa flavor.",
    category: "Desserts",
    price: 139,
    image: chocolateCake,
  },
  {
    id: "21",
    name: "Matcha Ice Cream",
    description: "Japanese-style matcha ice cream with a smooth texture.",
    category: "Desserts",
    price: 119,
    image: matchaIceCream,
  },
  {
    id: "22",
    name: "Melon Bingsu",
    description: "Korean-style shaved ice topped with sweet melon.",
    category: "Desserts",
    price: 159,
    image: melonBingsu,
  },
  {
    id: "23",
    name: "Chocolate Chip Cookie",
    description: "Soft baked cookie with chocolate chips.",
    category: "Desserts",
    price: 69,
    image: softChocolateChipCookie,
  },
  {
    id: "24",
    name: "Strawberry Macaron",
    description: "French macaron filled with strawberry cream cheese filling.",
    category: "Desserts",
    price: 89,
    image: strawberryMacaron,
  },
  {
    id: "25",
    name: "Strawberry Swiss Roll",
    description: "Soft sponge cake rolled with strawberry cream.",
    category: "Desserts",
    price: 119,
    image: strawberrySwissRoll,
  },

  // =====================
  // Light Bites
  // =====================
  {
    id: "26",
    name: "Cheese Filled Croquettes",
    description: "Crispy croquettes filled with melted cheese and sauce.",
    category: "Light Bites",
    price: 129,
    image: cheeseCroquettes,
  },
  {
    id: "27",
    name: "Corn Dog",
    description: "Classic crispy corn dog snack.",
    category: "Light Bites",
    price: 89,
    image: cornDog,
  },
  {
    id: "28",
    name: "Fortune Cookie",
    description: "Crunchy fortune cookie with a surprise message.",
    category: "Light Bites",
    price: 49,
    image: fortuneCookie,
  },
  {
    id: "29",
    name: "Grilled Pork Skewers",
    description: "Grilled pork skewers served with sauce and vegetables.",
    category: "Light Bites",
    price: 119,
    image: grilledPorkSkewers,
  },
  {
    id: "30",
    name: "Thai Fish Cakes",
    description: "Thai-style fish cakes served with sweet chili sauce.",
    category: "Light Bites",
    price: 109,
    image: thaiFishCakes,
  },

  // =====================
  // Soups
  // =====================
  {
    id: "31",
    name: "Corn Soup",
    description: "Creamy sweet corn soup.",
    category: "Soups",
    price: 99,
    image: cornSoup,
  },
  {
    id: "32",
    name: "Miso Soup",
    description: "Traditional Japanese soup with tofu and seaweed.",
    category: "Soups",
    price: 79,
    image: misoSoup,
  },
  {
    id: "33",
    name: "Pumpkin Soup",
    description: "Smooth pumpkin soup with a creamy texture.",
    category: "Soups",
    price: 99,
    image: pumpkinSoup,
  },
  {
    id: "34",
    name: "Spinach Soup",
    description: "Healthy spinach soup with fresh ingredients.",
    category: "Soups",
    price: 99,
    image: spinachSoup,
  },
  {
    id: "35",
    name: "Tom Yum Goong",
    description: "Thai spicy and sour soup with fresh shrimp.",
    category: "Soups",
    price: 159,
    image: tomYumGoong,
  },
];
