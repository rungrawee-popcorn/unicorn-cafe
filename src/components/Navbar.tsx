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
import { Link } from "react-router-dom"

const Navbar = () => {
  const { cart } = useCart()
  const [open, setOpen] = useState(false)

  // รวมจำนวนสินค้าในตะกร้า
  const totalQty = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  )

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* โลโก้ + ลิงก์กลับหน้า Home */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit"
            }}
            component={Link}
            to="/"
          >
            🦄 Unicorn Cafe
          </Typography>

          {/* ปุ่มตะกร้า */}
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <Badge badgeContent={totalQty} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer ตะกร้า */}
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default Navbar