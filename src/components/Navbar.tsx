import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge
} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useState } from "react"
import { useCart } from "../context/CartContext"
import CartDrawer from "./CartDrawer"

const Navbar = () => {
  const { cart } = useCart()
  const [open, setOpen] = useState(false)

  const totalQty = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  )

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            🦄 Unicorn Cafe
          </Typography>

          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <Badge badgeContent={totalQty} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default Navbar