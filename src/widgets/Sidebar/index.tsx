import { CartItem } from "../../app/interface.js";
import { Cart } from "../../features/Cart/";
import s from "./sidebar.module.scss";
interface SidebarProps {
  setToggleModalForm: (value: boolean) => void;
  setCart: (updateFunction: (prev: CartItem[]) => CartItem[]) => void;
  cart: CartItem[];
}
const Sidebar = (props: SidebarProps) => {
  const { setToggleModalForm, cart, setCart } = props;
  return (
    <aside className={s.aside}>
      <Cart
        setToggleModalForm={setToggleModalForm}
        cart={cart}
        setCart={setCart}
      />
    </aside>
  );
};

export { Sidebar };
