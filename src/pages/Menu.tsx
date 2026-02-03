import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { menuList } from "../data/menu"
import { useCart } from "../context/CartContext"

const Menu = () => {
  const { addToCart } = useCart()

  const handleAddToCart = (food: any) => {
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price
    })
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={3}
      >
        🍽️ Unicorn Cafe Menu
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} padding={2}>
        {menuList.map((food) => (
          <Grid xs={12} sm={6} md={4} key={food.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {food.name}
                </Typography>

                <Typography color="text.secondary">
                  {food.price} บาท
                </Typography>
              </CardContent>

              <CardActions sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleAddToCart(food)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Menu