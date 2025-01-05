import s from "./main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
import { ProductList } from "../../features/ProductList/";
import { Cart } from "../../features/Cart/";
import { Outlet } from "react-router-dom";
import { Sort } from "../../features/Sort/";

const Main = () => {
  return (
    <>
      <main className={s.main}>
        <div className={s.header}>
          <RadioButtons />
          <Sort />
        </div>
        <div className={s.wrapper}>
          <Cart />
          <ProductList />
        </div>
      </main>
      <Outlet />
    </>
  );
};

export { Main };
