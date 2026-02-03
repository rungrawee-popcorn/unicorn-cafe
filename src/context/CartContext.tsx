import React, { createContext, useContext, useState } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string) => void
  totalQuantity: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }

      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}