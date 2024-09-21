import s from "./main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
import { ProductList } from "../../features/ProductList/";
import { Cart } from "../../features/Cart/";
interface MainProps {
  setFilterCategory: (value: string) => void;
  filterCategory: string;
}
const Main = (props: MainProps) => {
  const { setFilterCategory, filterCategory } = props;
  return (
    <main className={s.main}>
      <RadioButtons
        setFilterCategory={setFilterCategory}
        filterCategory={filterCategory}
      />
      <div className={s.wrapper}>
        <Cart />
        <ProductList filterCategory={filterCategory} />
      </div>
    </main>
  );
};

export { Main };
