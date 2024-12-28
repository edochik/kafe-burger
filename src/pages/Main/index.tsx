import s from "./main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
import { ProductList } from "../../features/ProductList/";
import { Cart } from "../../features/Cart/";
import { Outlet } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/";

const Main = () => {
  return (
    <>
      <main className={s.main}>
        <RadioButtons />
        <div className={s.wrapper}>
          {/* <NotFoundPage /> */}
          <Cart />
          <ProductList />
        </div>
      </main>
      <Outlet />
    </>
  );
};

export { Main };
