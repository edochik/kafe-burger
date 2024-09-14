import s from "./main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
import { Sidebar } from "../../widgets/Sidebar/";
import { ProductList } from "../../features/ProductList/";
interface MainProps {
  setToggleModalForm: (value: boolean) => void;
  setFilterCategory: (value: string) => void;
  filterCategory: string;
}
const Main: React.FC<MainProps> = (props) => {
  const { setToggleModalForm, setFilterCategory, filterCategory } = props;
  return (
    <main className={s.main}>
      <RadioButtons
        setFilterCategory={setFilterCategory}
        filterCategory={filterCategory}
      />
      <div className={s.wrapper}>
        <Sidebar setToggleModalForm={setToggleModalForm} />
        <ProductList filterCategory={filterCategory} />
      </div>
    </main>
  );
};

export { Main };
