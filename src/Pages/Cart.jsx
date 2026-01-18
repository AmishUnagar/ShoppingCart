import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Divider,
  Button
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <Typography variant="h5" align="center" sx={{ mt: 6 }}>
        Your Cart is Empty 🛒
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {cart.map(item => (
        <Card key={item.id} sx={{ display: "flex", mb: 2 }}>
          <CardMedia
            component="img"
            image={item.thumbnail}
            alt={item.title}
            sx={{ width: 140 }}
          />

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>

            <Typography sx={{ mt: 1 }}>₹ {item.price}</Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <IconButton onClick={() => dispatch({ type: "Decrease", id: item.id })}>
                <RemoveIcon />
              </IconButton>

              <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>

              <IconButton onClick={() => dispatch({ type: "Increase", id: item.id })}>
                <AddIcon />
              </IconButton>
            </Box>
          </CardContent>

          <IconButton
            color="error"
            onClick={() => dispatch({ type: "Remove", id: item.id })}
          >
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}

      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">Total</Typography>
        <Typography variant="h5">₹ {totalPrice.toFixed(2)}</Typography>
      </Box>

      <Button variant="contained" color="success" fullWidth sx={{ mt: 3 }}>
        Proceed to Checkout
      </Button>
    </Box>
  );
}

export default Cart;
