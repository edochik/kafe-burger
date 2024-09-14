import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { Main } from "../pages/Main";
import { ModalCard } from "../widgets/ModalCard/";
import { ModalForm } from "../widgets/ModalForm/";
import { useState } from "react";
const App = () => {
  const [toggleModalForm, setToggleModalForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState("burgers");
  console.log(filterCategory);
  // const [toggleModalForm, setToggleModalForm] = useState(false);
  return (
    <>
      <Header />
      <Main
        setToggleModalForm={setToggleModalForm}
        setFilterCategory={setFilterCategory}
        filterCategory={filterCategory}
      />
      <Footer />
      {/* <ModalCard /> */}
      {toggleModalForm && <ModalForm setToggleModalForm={setToggleModalForm} />}
    </>
  );
};

export { App };
