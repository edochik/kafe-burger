import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { useState } from "react";
import { CartItem } from "./interface";
import { AppRouter } from "./router";
import {
  BrowserRouter as Router,
  useLocation,
  useParams,
} from "react-router-dom";
import { Main } from "../pages/Main/";
import { NotFoundPage } from "../pages/NotFoundPage/";
const paths = [
  "/order",
  "/authorization",
  "/registration",
  "/product",
  "/",
  "",
];
const App = () => {
  const [filterCategory, setFilterCategory] = useState("burgers");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [path, setPath] = useState("");

  return (
    <Router>
      <Header />
      {paths.includes(path) ? (
        <Main
          setFilterCategory={setFilterCategory}
          filterCategory={filterCategory}
          setCart={setCart}
          cart={cart}
        />
      ) : (
        <NotFoundPage />
      )}
      <AppRouter setPath={setPath} />
      <Footer />
    </Router>
  );
};

export { App };
