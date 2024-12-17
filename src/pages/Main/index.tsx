import s from "./main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
import { ProductList } from "../../features/ProductList/";
import { Cart } from "../../features/Cart/";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const { pathname } = useLocation();
  return (
    <>
      <main className={s.main}>
        <RadioButtons />
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
