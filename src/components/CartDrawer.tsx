import {
    Drawer,
    Box,
    Typography,
    IconButton,
    Divider,
    Stack
  } from "@mui/material"
  import CloseIcon from "@mui/icons-material/Close"
  import { useCart } from "../context/CartContext"
  
  interface CartDrawerProps {
    open: boolean
    onClose: () => void
  }
  
  const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
    const { cartItems } = useCart()
  
    return (
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 320, p: 2 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              🛒 Your Cart
            </Typography>
  
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
  
          <Divider sx={{ mb: 2 }} />
  
          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <Typography color="text.secondary">
              Cart is empty
            </Typography>
          ) : (
            <Stack spacing={2}>
              {cartItems.map((item) => (
                <Box key={item.id}>
                  <Typography fontWeight="bold">
                    {item.name}
                  </Typography>
  
                  <Typography variant="body2" color="text.secondary">
                    {item.quantity} x {item.price} บาท
                  </Typography>
                </Box>
              ))}
            </Stack>
          )}
        </Box>
      </Drawer>
    )
  }
  
  export default CartDrawer  