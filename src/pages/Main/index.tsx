import s from "./main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
import { Sidebar } from "../../widgets/Sidebar/";
import { ProductList } from "../../features/ProductList/";
interface MainProps {
  setToggleModalForm: (value: boolean) => void;
}
const Main: React.FC<MainProps> = ({ setToggleModalForm }) => {
  return (
    <main className={s.main}>
      <RadioButtons />
      <div className={s.wrapper}>
        <Sidebar setToggleModalForm={setToggleModalForm} />
        <ProductList />
      </div>
    </main>
  );
};

export { Main };
