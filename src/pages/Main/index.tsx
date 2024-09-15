import s from "./main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
import { Sidebar } from "../../widgets/Sidebar/";
import { ProductList } from "../../features/ProductList/";
import { CartItem } from "../../app/interface.js";
interface MainProps {
  setFilterCategory: (value: string) => void;
  setCart: (updateFunction: (prev: CartItem[]) => CartItem[]) => void;
  filterCategory: string;
  cart: CartItem[];
}
const Main = (props: MainProps) => {
  const {
    setFilterCategory,
    filterCategory,
    setCart,
    cart,
  } = props;
  return (
    <main className={s.main}>
      <RadioButtons
        setFilterCategory={setFilterCategory}
        filterCategory={filterCategory}
      />
      <div className={s.wrapper}>
        <Sidebar
          cart={cart}
          setCart={setCart}
        />
        <ProductList filterCategory={filterCategory} setCart={setCart} />
      </div>
    </main>
  );
};

export { Main };
