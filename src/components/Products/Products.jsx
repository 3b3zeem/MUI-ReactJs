import { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Slider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Avatar,
  IconButton,
  CardHeader,
  CardActions,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { red } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router";

const ProductsPage = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [inStock, setInStock] = useState(false);

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

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (!inStock || product.inStock) &&
      product.rating >= rating &&
      (category === "" || product.category === category)
  );

  return (
    <Box sx={{ p: 3, maxWidth: "1200px", margin: "auto" }}>
      <Grid container spacing={3}>
        {/* Filter Section */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              boxShadow: 2,
              backgroundColor: "#fff",
            }}
          >
            <TextField
              fullWidth
              label="Search Products"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Typography variant="h6" gutterBottom>
              Price Range
            </Typography>
            <Slider
              value={priceRange}
              min={0}
              max={500}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="fashion">Fashion</MenuItem>
                <MenuItem value="home">Home</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Rating
            </Typography>
            <Box>
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  sx={{
                    cursor: "pointer",
                    color: index < (hover || rating) ? "gold" : "#ccc",
                  }}
                  onMouseEnter={() => setHover(index + 1)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setRating(index + 1)}
                />
              ))}
            </Box>
            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                In Stock
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={inStock}
                      onChange={() => setInStock(!inStock)}
                    />
                  }
                  label="In Stock Only"
                />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>

        {/* Products Section */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }}>
                          {product.title.charAt(0)}
                        </Avatar>
                      }
                      action={
                        <IconButton component={Link} to={`/product/${product.id}`}>
                          <RemoveRedEyeIcon />
                        </IconButton>
                      }
                      title={product.title}
                      subheader={`$${product.price}`}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={product.image}
                      alt={product.title}
                    />
                    <CardContent>
                      <Box>
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            sx={{
                              color: index < product.rating ? "gold" : "#ccc",
                            }}
                          />
                        ))}
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        Some quick description about {product.title}.
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing sx={{ position: "relative" }}>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <Chip
                        sx={{ position: "absolute", right: "10px" }}
                        label={product.inStock ? "In Stock" : "Out of Stock"}
                        color={product.inStock ? "success" : "error"}
                        icon={
                          product.inStock ? <CheckCircleIcon /> : <CancelIcon />
                        }
                      />
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography variant="h6" align="center">
                  No product available
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
