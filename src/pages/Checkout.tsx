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
    Radio
  } from "@mui/material"
  import { useCart } from "../context/CartContext"
  import { useNavigate } from "react-router-dom"
  import { useState } from "react"
  
  const Checkout = () => {
    const { cart } = useCart()
    const navigate = useNavigate()
  
    /* เก็บวิธีชำระเงิน */
    const [paymentMethod, setPaymentMethod] = useState("cash")
  
    /* คำนวณราคารวม */
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    )
  
    /* ถ้าไม่มีของในตะกร้า */
    if (cart.length === 0) {
      return (
        <Typography textAlign="center" mt={5}>
          🛒 Your cart is empty
        </Typography>
      )
    }
  
    /* ยืนยันออเดอร์ */
    const handleConfirm = () => {
      navigate("/success", {
        state: { paymentMethod }
      })
    }
  
    return (
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 2 }}>
  
        {/* รายการสินค้า */}
        <List>
          {cart.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemText
                primary={`${item.name} x ${item.qty}`}
                secondary={`${item.price * item.qty} บาท`}
              />
            </ListItem>
          ))}
        </List>
  
        <Divider sx={{ my: 2 }} />
  
        {/* ราคารวม */}
        <Typography variant="h6" mb={2}>
          Total: {total} บาท
        </Typography>
  
        {/* วิธีการชำระเงิน */}
        <Typography fontWeight="bold" mb={1}>
          วิธีการชำระเงิน
        </Typography>
  
        <RadioGroup
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <FormControlLabel
            value="cash"
            control={<Radio />}
            label="เงินสด"
          />
          <FormControlLabel
            value="app"
            control={<Radio />}
            label="หักผ่านแอพ (สมมติ)"
          />
        </RadioGroup>
  
        {/* ปุ่ม */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleConfirm}
        >
          Confirm Order
        </Button>
  
        <Button
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => navigate("/")}
        >
          ← สั่งอาหารเพิ่ม
        </Button>
      </Box>
    )
  }
  
  export default Checkout  