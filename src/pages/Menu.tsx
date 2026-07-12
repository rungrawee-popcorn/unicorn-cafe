import { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Chip,
  Stack,
  Container,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { menuList } from "../data/menu";
import { useCart } from "../context/CartContext";

const categories = [
  "All",
  "Light Bites",
  "Soups",
  "Savory Dishes",
  "Desserts",
  "Beverages",
];

const Menu = () => {
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const foods = useMemo(() => {
    if (selectedCategory === "All") return menuList;

    return menuList.filter((food) => food.category === selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (food: any) => {
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
    });
  };

  return (
    <Container maxWidth="lg">
      {/* Hero */}

      <Box
        sx={{
          mt: 4,
          mb: 5,
          borderRadius: 5,
          p: 6,
          color: "#fff",
          textAlign: "center",
          background: "linear-gradient(135deg,#7b1fa2,#ab47bc,#ce93d8)",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Unicorn Cafe
        </Typography>

        <Typography variant="h6">Fresh • Homemade • Delicious</Typography>

        <Typography
          sx={{
            mt: 2,
            opacity: 0.9,
          }}
        >
          Discover our handcrafted menu made with love.
        </Typography>
      </Box>

      {/* Title */}

      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        🍽️ Our Menu
      </Typography>

      {/* Categories */}

      <Stack
        direction="row"
        spacing={1.5}
        justifyContent="center"
        flexWrap="wrap"
        useFlexGap
        mb={5}
      >
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            clickable
            color={selectedCategory === category ? "secondary" : "default"}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </Stack>

      {/* Food */}

      <Grid container spacing={3}>
        {foods.map((food) => (
          <Grid xs={12} sm={6} md={4} key={food.id}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: ".3s",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={
                  food.image ?? "https://placehold.co/600x400?text=Coming+Soon"
                }
                alt={food.name}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Chip
                  label={food.category}
                  color="secondary"
                  size="small"
                  sx={{ mb: 2 }}
                />

                <Typography variant="h6" fontWeight="bold">
                  {food.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    minHeight: 48,
                  }}
                >
                  {food.description}
                </Typography>

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="secondary.main"
                  mt={3}
                >
                  ฿{food.price}
                </Typography>
              </CardContent>

              <CardActions sx={{ p: 2 }}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => handleAddToCart(food)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {foods.length === 0 && (
        <Box textAlign="center" mt={8}>
          <Typography variant="h6">No menu available.</Typography>
        </Box>
      )}
    </Container>
  );
};

export default Menu;
