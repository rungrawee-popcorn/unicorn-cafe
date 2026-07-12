import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  /* Store payment method */
  const [paymentMethod, setPaymentMethod] = useState("cash");

  /* Calculate total price */
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  /* Display message when cart is empty */
  if (cart.length === 0) {
    return (
      <Typography textAlign="center" mt={5}>
        🛒 Your cart is empty
      </Typography>
    );
  }

  /* Confirm order */
  const handleConfirm = () => {
    navigate("/success", {
      state: { paymentMethod },
    });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 2 }}>
      {/* Order Items */}
      <List>
        {cart.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemText
              primary={`${item.name} x ${item.qty}`}
              secondary={`${item.price * item.qty} THB`}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Total Price */}
      <Typography variant="h6" mb={2}>
        Total: {total} THB
      </Typography>

      {/* Payment Method */}
      <Typography fontWeight="bold" mb={1}>
        Payment Method
      </Typography>

      <RadioGroup
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <FormControlLabel value="cash" control={<Radio />} label="Cash" />

        <FormControlLabel
          value="app"
          control={<Radio />}
          label="Payment via Application"
        />
      </RadioGroup>

      {/* Action Buttons */}
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleConfirm}
      >
        Confirm Order
      </Button>

      <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate("/")}>
        ← Add More Items
      </Button>
    </Box>
  );
};

export default Checkout;
