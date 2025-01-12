import s from "./Main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
import { ProductList } from "../../features/Cards";
import { Cart } from "../../features/Cart/";
import { Outlet } from "react-router-dom";
import { Sort } from "../../features/Sort/";
const Main = () => {
  return (
    <>
      <main className={s.Main}>
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
