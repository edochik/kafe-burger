import { CartItem } from "../../app/interface.js";
import { Cart } from "../../features/Cart/";
import s from "./sidebar.module.scss";
interface SidebarProps {
  setCart: (updateFunction: (prev: CartItem[]) => CartItem[]) => void;
  cart: CartItem[];
}
const Sidebar = (props: SidebarProps) => {
  const {  cart, setCart } = props;
  return (
    <aside className={s.aside}>
      <Cart
        cart={cart}
        setCart={setCart}
      />
    </aside>
  );
};

export { Sidebar };
