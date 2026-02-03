import React, { createContext, useContext, useState } from "react"

export interface CartItem {
  id: number
  name: string
  price: number
  qty: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, "qty">) => void
  removeFromCart: (id: number) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: Omit<CartItem, "qty">) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id)
      if (found) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    )
  }

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty
      }}
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