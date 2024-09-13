import { Cart } from "../../features/Cart/";
import s from "./sidebar.module.scss";
const Sidebar = () => {
  return (
    <aside className={s.aside}>
      <Cart />
    </aside>
  );
};

export { Sidebar };
