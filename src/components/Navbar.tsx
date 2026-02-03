import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box
} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import CartDrawer from "./CartDrawer"

const Navbar = () => {
  const { totalQuantity } = useCart()
  const [openCart, setOpenCart] = useState(false)

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold"
            }}
          >
            🦄 Unicorn Cafe
          </Typography>

          {/* Cart Icon */}
          <Box>
            <IconButton
              color="inherit"
              onClick={() => setOpenCart(true)}
            >
              <Badge
                badgeContent={totalQuantity}
                color="error"
                invisible={totalQuantity === 0}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Cart Drawer */}
      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
      />
    </>
  )
}

export default Navbar