import { CartItem } from "../../app/interface.js";
import { ProductCart } from "../ProductCart/";
import s from "./Cart.module.scss";
interface CartProps {
  setToggleModalForm: (value: boolean) => void;
  setCart: (updateFunction: (prev: CartItem[]) => CartItem[]) => void;
  cart: CartItem[];
}
const Cart = (props: CartProps) => {
  const { setToggleModalForm, cart, setCart } = props;
  const total = cart.reduce((acc, item) => acc + item.count, 0);
  return (
    <div className={s.cart}>
      <div className={s.wrapper_cart}>
        <h3 className={s.title}>Корзина</h3>
        <p className={s.count}>{total}</p>
      </div>
      <div className={s.carts}>
        {/* <ProductCart /> */}
        {cart.map((product) => (
          <ProductCart key={product.id} {...product} />
        ))}
      </div>
      <div className={s.wrapper_total}>
        <p className={s.total}>Итого</p>
        <p className={s.price}>1279₽</p>
      </div>
      <a
        className={s.button}
        href="#!"
        onClick={() => setToggleModalForm(true)}
      >
        Оформить заказ
      </a>
      <p className={s.info}>Бесплатная доставка</p>
    </div>
  );
};
// Тут пока пусто :(
export { Cart };
