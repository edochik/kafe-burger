import s from "./main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
import { Sidebar } from "../../widgets/Sidebar/";
import { ProductList } from "../../features/ProductList/";
const Main = () => {
  return (
    <main className={s.main}>
      <RadioButtons />
      <div className={s.wrapper}>
        <Sidebar />
        <ProductList />
      </div>
    </main>
  );
};

export { Main };
