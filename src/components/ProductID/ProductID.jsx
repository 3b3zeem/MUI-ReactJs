import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Chip,
  Grid,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 99,
    image: "https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a",
    inStock: true,
    rating: 4,
    category: "electronics",
  },
  {
    id: 2,
    title: "Product 2",
    price: 199,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    inStock: false,
    rating: 3,
    category: "electronics",
  },
  {
    id: 3,
    title: "Product 3",
    price: 299,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    inStock: true,
    rating: 5,
    category: "home",
  },
  {
    id: 4,
    title: "Product 4",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    rating: 4,
    category: "electronics",
  },
  {
    id: 5,
    title: "Product 5",
    price: 249,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    inStock: false,
    rating: 3,
    category: "fashion",
  },
  {
    id: 6,
    title: "Product 6",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    rating: 5,
    category: "home",
  },
  {
    id: 7,
    title: "Product 7",
    price: 89,
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    inStock: true,
    rating: 4,
    category: "electronics",
  },
  {
    id: 8,
    title: "Product 8",
    price: 199,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    inStock: false,
    rating: 3,
    category: "fashion",
  },
  {
    id: 9,
    title: "Product 9",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    rating: 5,
    category: "home",
  },
];

const ProductDetails = () => {
  const { id } = useParams(); // جلب الـ ID من الـ URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h5" color="error">
          Product not found!
        </Typography>
      </Container>
    );
  }

  return (
    <Container Width="l">
      <Card sx={{ mt: 5, p: 3, display: "flex", alignItems: "center" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{ width: "100%", borderRadius: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <CardContent>
              <Typography variant="h4" fontWeight="bold">
                {product.title}
              </Typography>
              <Typography variant="h5" color="primary" sx={{ my: 1 }}>
                ${product.price}
              </Typography>
              <Chip
                label={product.inStock ? "In Stock" : "Out of Stock"}
                color={product.inStock ? "success" : "error"}
                sx={{ mb: 2 }}
              />

              <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    sx={{
                      color: index < product.rating ? "gold" : "gray",
                    }}
                  />
                ))}
              </Box>

              <Typography variant="body1" color="text.secondary" mt={2}>
                A great <b>{product.category}</b> product with top-quality features.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default ProductDetails;
