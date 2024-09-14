import { ProductCart } from "../ProductCart/";
import s from "./Cart.module.scss";
interface CartProps {
  setToggleModalForm: (value: boolean) => void;
}
const Cart: React.FC<CartProps> = ({ setToggleModalForm }) => {
  return (
    <div className={s.cart}>
      <div className={s.wrapper_cart}>
        <h3 className={s.title}>Корзина</h3>
        <p className={s.count}>0</p>
      </div>
      <div className={s.carts}>
        <ProductCart />
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
