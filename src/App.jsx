import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
