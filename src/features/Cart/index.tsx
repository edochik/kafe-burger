import { Link } from "react-router-dom";
import { CartItem } from "../../app/interface.js";
import { ProductCart } from "../ProductCart/";
import s from "./Cart.module.scss";
interface CartProps {
  setCart: (updateFunction: (prev: CartItem[]) => CartItem[]) => void;
  cart: CartItem[];
}
const Cart = (props: CartProps) => {
  const { cart, setCart } = props;
  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className={s.cart}>
      <div className={s.wrapper_cart}>
        <h3 className={s.title}>Корзина</h3>
        <p className={s.count}>{totalCount}</p>
      </div>
      <div className={s.carts}>
        {/* <ProductCart /> */}
        {cart.map((product) => (
          <ProductCart key={product.id} {...product} />
        ))}
      </div>
      <div className={s.wrapper_total}>
        <p className={s.total}>Итого</p>
        <p className={s.price}>{totalPrice}₽</p>
      </div>
      <Link className={s.button} to="/modal/order">
        Оформить заказ
      </Link>
      <p className={s.info}>Бесплатная доставка</p>
    </div>
  );
};
// Тут пока пусто :(
export { Cart };
