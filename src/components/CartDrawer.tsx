import { Drawer, Box, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: Props) => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const navigate = useNavigate();

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
          <Typography color="text.secondary">Your cart is empty</Typography>
        ) : (
          <>
            {cart.map((item) => (
              <Box key={item.id} mb={2}>
                <Typography fontWeight="bold">{item.name}</Typography>

                <Typography>
                  {item.price} x {item.qty} = {item.price * item.qty} THB
                </Typography>

                <Box mt={1}>
                  <Button size="small" onClick={() => decreaseQty(item.id)}>
                    -
                  </Button>

                  <Button size="small" onClick={() => increaseQty(item.id)}>
                    +
                  </Button>

                  <Button
                    size="small"
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            ))}

            <Typography fontWeight="bold" mt={2}>
              Total: {total} THB
            </Typography>
          </>
        )}
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => {
          onClose();
          navigate("/checkout");
        }}
      >
        Go to Checkout
      </Button>
    </Drawer>
  );
};

export default CartDrawer;
