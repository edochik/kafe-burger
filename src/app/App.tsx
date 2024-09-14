import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { Main } from "../pages/Main";
import { ModalCard } from "../widgets/ModalCard/";
import { ModalForm } from "../widgets/ModalForm/";
import { useState } from "react";
import { CartItem } from "./interface";

const App = () => {
  const [toggleModalForm, setToggleModalForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState("burgers");
  const [cart, setCart] = useState<CartItem[]>([]);
  // console.log(cart);
  // console.log(cart);
  // const [toggleModalForm, setToggleModalForm] = useState(false);
  return (
    <>
      <Header />
      <Main
        setToggleModalForm={setToggleModalForm}
        setFilterCategory={setFilterCategory}
        filterCategory={filterCategory}
        setCart={setCart}
        cart={cart}
      />
      <Footer />
      {/* <ModalCard /> */}
      {toggleModalForm && <ModalForm setToggleModalForm={setToggleModalForm} />}
    </>
  );
};

export { App };
