import {
    Drawer,
    Box,
    Typography,
    IconButton,
    Button
  } from "@mui/material"
  import CloseIcon from "@mui/icons-material/Close"
  import { useCart } from "../context/CartContext"
  
  interface Props {
    open: boolean
    onClose: () => void
  }
  
  const CartDrawer = ({ open, onClose }: Props) => {
    const {
      cart,
      increaseQty,
      decreaseQty,
      removeFromCart
    } = useCart()
  
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    )
  
    return (
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 320, p: 2 }}>
          {/* Header */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6">🛒 Your Cart</Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
  
          {cart.length === 0 ? (
            <Typography color="text.secondary">
              ไม่มีสินค้าในตะกร้า
            </Typography>
          ) : (
            <>
              {cart.map((item) => (
                <Box key={item.id} mb={2}>
                  <Typography fontWeight="bold">
                    {item.name}
                  </Typography>
  
                  <Typography>
                    {item.price} × {item.qty} ={" "}
                    {item.price * item.qty} บาท
                  </Typography>
  
                  <Box mt={1}>
                    <Button
                      size="small"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </Button>
                    <Button
                      size="small"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ลบ
                    </Button>
                  </Box>
                </Box>
              ))}
  
              <Typography fontWeight="bold" mt={2}>
                รวมทั้งหมด: {total} บาท
              </Typography>
            </>
          )}
        </Box>
      </Drawer>
    )
  }
  
  export default CartDrawer  