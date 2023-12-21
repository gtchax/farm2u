import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="shop"  element={<Shop />} />
      <Route path="checkout"  element={<Checkout />} />
    </Routes>
  );
};

export default AppRouter;
