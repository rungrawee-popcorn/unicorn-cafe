export type Topping = {
  id: string;
  name: string;
  price: number;
};

export type FoodCategory =
  | "Light Bites"
  | "Soups"
  | "Savory Dishes"
  | "Desserts"
  | "Beverages";

export type Food = {
  id: string;
  name: string;
  description: string;
  category: FoodCategory;
  price: number;
  image?: string;
  toppings?: Topping[];
};
