import s from "./main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
import { ProductList } from "../../features/ProductList/";
import { Cart } from "../../features/Cart/";

const Main = () => {
  return (
    <main className={s.main}>
      <RadioButtons />
      <div className={s.wrapper}>
        <Cart />
        <ProductList />
      </div>
    </main>
  );
};

export { Main };
