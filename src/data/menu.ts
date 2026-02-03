import { Food } from '../types/food'

export const menuList: Food[] = [
  {
    id: '1',
    name: 'Unicorn Latte',
    price: 120,
    toppings: [
      { id: 't1', name: 'Extra Milk', price: 10 },
      { id: 't2', name: 'Whipped Cream', price: 15 }
    ]
  },
  {
    id: '2',
    name: 'Rainbow Cake',
    price: 150
  },
  {
    id: '3',
    name: 'Magic Croissant',
    price: 90
  }
]