import { Link } from "react-router-dom";
import { ProductCart } from "../ProductCart/";
import s from "./Cart.module.scss";
import { useAppSelector } from "../../shared/lib/hooks/hooks";

const Cart = () => {
  const productsInCart = useAppSelector((state) => state.productsInCart);
  const totalCount = productsInCart.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = productsInCart.reduce(
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
        {productsInCart.length === 0 ? (
          <>Тут пока пусто :(</>
        ) : (
          <>
            <div className={s.carts}>
              {productsInCart.map((product) => (
                <ProductCart key={product.id} {...product} />
              ))}
            </div>
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
