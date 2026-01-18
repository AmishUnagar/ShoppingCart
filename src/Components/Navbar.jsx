import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from "../Features/ContextProvider";

export default function Navbar() {
    const {cart}=React.useContext(CartContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">
         <Link to="/" style={{ textDecoration: "none", color: "white" }}>Shopping Cart</Link>
        </Typography>

        <Box>
        
          <Button color="inherit">
           <Link to="/cart" style={{ textDecoration: "none", color: "white" }}><ShoppingCartOutlinedIcon/>{cart.length}</Link>
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
