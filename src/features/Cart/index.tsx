import { Link } from "react-router-dom";
import { ProductCart } from "../ProductCart/";
import s from "./Cart.module.scss";
import { useAppSelector } from "../../shared/lib/hooks/hooks";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <aside>
      <div className={s.cart}>
        <div className={s.wrapper_cart}>
          <h3 className={s.title}>Корзина</h3>
          <p className={s.count}>{totalCount}</p>
        </div>
        {cart.length === 0 ? (
          <>Тут пока пусто :(</>
        ) : (
          <>
            <ul className={s.carts}>
              {cart.map((product) => (
                <ProductCart key={product.id} {...product} />
              ))}
            </ul>
            <div className={s.wrapper_total}>
              <p className={s.text}>Итого</p>
              <p className={s.total}>{totalPrice}₽</p>
            </div>
            <Link className={s.link} to="/order">
              <button className={s.button}>Оформить заказ</button>
            </Link>
            <p className={s.info}>Бесплатная доставка</p>
          </>
        )}
      </div>
    </aside>
  );
};

export { Cart };
