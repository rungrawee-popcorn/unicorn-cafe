import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useMemo } from "react";

/*
  Page displayed after order completion
*/
const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();

  /* Get payment method from checkout */
  const paymentMethod =
    location.state?.paymentMethod === "cash"
      ? "Cash"
      : "Payment via Application";

  /* Generate mock Order ID */
  const orderId = useMemo(() => {
    return "UC-" + Math.floor(100000 + Math.random() * 900000);
  }, []);

  /* Get current order date and time */
  const orderDate = useMemo(() => {
    return new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  /* Clear cart when entering this page */
  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 500,
          width: "100%",
          p: 4,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" mb={2}>
          ✅ Order Completed
        </Typography>

        <Typography color="text.secondary" mb={3}>
          Thank you for ordering from Unicorn Cafe 🦄
        </Typography>

        {/* Order Summary */}
        <Box sx={{ textAlign: "left", mb: 3 }}>
          <Typography>
            <b>Order ID:</b> {orderId}
          </Typography>

          <Typography>
            <b>Date:</b> {orderDate}
          </Typography>

          <Typography>
            <b>Payment Method:</b> {paymentMethod}
          </Typography>
        </Box>

        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={() => navigate("/", { replace: true })}
        >
          Back to Menu
        </Button>
      </Paper>
    </Box>
  );
};

export default OrderSuccess;
