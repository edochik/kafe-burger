import { Cart } from "../../features/Cart/";
import s from "./sidebar.module.scss";
interface SidebarProps {
  setToggleModalForm: (value: boolean) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ setToggleModalForm }) => {
  return (
    <aside className={s.aside}>
      <Cart setToggleModalForm={setToggleModalForm} />
    </aside>
  );
};

export { Sidebar };
