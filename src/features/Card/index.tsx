import { Link, useLocation } from "react-router-dom";
import s from "./Card.module.scss";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { addProductToCart } from "../../shared/lib/utils/addProductToCart";
import { Product } from "../../entities/product/types";

const Card = (product: Product) => {
  const { id, nameRu, price, weight, imageUrl } = product;
  const location = useLocation();

  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const nameUpperCase = nameRu.slice(0, 1).toUpperCase() + nameRu.slice(1);
  return (
    <li className={s.Card}>
      <Link to={`/product/${id}`} state={{ modal: true, background: location }}>
        <img className={s.image} src={imageUrl} alt={nameRu} />
      </Link>
      <p className={s.price}>{price}₽</p>
      <h3 className={s.title}>{nameUpperCase}</h3>
      <p className={s.weight}>{weight}г</p>
      <button
        className={s.button}
        onClick={() => addProductToCart(dispatch, cart, product)}
      >
        Добавить
      </button>
    </li>
  );
};

export { Card };
