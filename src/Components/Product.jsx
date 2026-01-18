import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React,{useContext} from "react";
import {CartContext} from "../Features/ContextProvider";
export default function Product({ product }) {
  const { dispatch } = useContext(CartContext);
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.thumbnail}
        alt={product.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h6">
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          ₹ {product.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={(()=>dispatch({type:"Add",product:product}))} size="small" variant="contained">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
