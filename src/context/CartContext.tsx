import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

/* -----------------------------
  Type ของสินค้าในตะกร้า
----------------------------- */
export interface CartItem {
  id: number
  name: string
  price: number
  qty: number
}

/* -----------------------------
  Type ของ Context
----------------------------- */
interface CartContextType {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, "qty">) => void
  removeFromCart: (id: number) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  clearCart: () => void
}

/* -----------------------------
  สร้าง Context
----------------------------- */
const CartContext = createContext<CartContextType | null>(null)

/* -----------------------------
  Provider
----------------------------- */
export const CartProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  /* โหลด cart ครั้งแรก */
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  /* sync cart → localStorage */
  useEffect(() => {
    if (cart.length === 0) {
      localStorage.removeItem("cart")
    } else {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

  /* เพิ่มสินค้า */
  const addToCart = (item: Omit<CartItem, "qty">) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id)

      if (found) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1 }
            : i
        )
      }

      return [...prev, { ...item, qty: 1 }]
    })
  }

  /* ลบสินค้า */
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  /* เพิ่มจำนวน */
  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    )
  }

  /* ลดจำนวน */
  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    )
  }

  /* ล้างตะกร้า */
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/* -----------------------------
  Custom Hook
----------------------------- */
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    )
  }
  return context
}