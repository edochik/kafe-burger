import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { Main } from "../pages/Main";
import { useState } from "react";
import { CartItem } from "./interface";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductPage } from "../widgets/ProductPage/";
import { ModalOrder } from "../widgets/ModalOrder/";

const App = () => {
  const [filterCategory, setFilterCategory] = useState("burgers");
  const [cart, setCart] = useState<CartItem[]>([]);
  return (
    <Router>
      <Header />
      <Main
        setFilterCategory={setFilterCategory}
        filterCategory={filterCategory}
        setCart={setCart}
        cart={cart}
      />
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/modal/order" element={<ModalOrder />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export { App };
