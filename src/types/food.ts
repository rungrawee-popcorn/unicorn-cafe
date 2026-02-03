export type Topping = {
    id: string
    name: string
    price: number
  }
  
  export type Food = {
    id: string
    name: string
    price: number
    image?: string
    toppings?: Topping[]
  }  