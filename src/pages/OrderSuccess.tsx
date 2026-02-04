import { Box, Typography, Button, Paper } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useEffect, useMemo } from "react"

/*
  หน้าแสดงผลหลังจากสั่งอาหารสำเร็จ
*/
const OrderSuccess = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { clearCart } = useCart()

  /* ดึงวิธีชำระเงินจาก Checkout */
  const paymentMethod =
    location.state?.paymentMethod === "cash"
      ? "เงินสด"
      : "ชำระผ่านแอพ"

  /* สุ่ม Order ID (mock) */
  const orderId = useMemo(() => {
    return "UC-" + Math.floor(100000 + Math.random() * 900000)
  }, [])

  /* วันที่และเวลา */
  const orderDate = useMemo(() => {
    return new Date().toLocaleString("th-TH")
  }, [])

  /* ล้างตะกร้าเมื่อเข้าหน้านี้ */
  useEffect(() => {
    clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 500,
          width: "100%",
          p: 4,
          textAlign: "center",
          borderRadius: 3
        }}
      >
        <Typography variant="h4" mb={2}>
          ✅ Order Completed
        </Typography>

        <Typography color="text.secondary" mb={3}>
          ขอบคุณที่สั่งอาหารกับ Unicorn Cafe 🦄
        </Typography>

        {/* Order Summary */}
        <Box sx={{ textAlign: "left", mb: 3 }}>
          <Typography>
            <b>Order ID:</b> {orderId}
          </Typography>
          <Typography>
            <b>วันที่:</b> {orderDate}
          </Typography>
          <Typography>
            <b>วิธีชำระเงิน:</b> {paymentMethod}
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
  )
}

export default OrderSuccess