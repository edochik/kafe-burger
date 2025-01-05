import { Link } from "react-router-dom";
import s from "./ProductCard.module.scss";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { addProductToCart } from "../../shared/lib/utils/addProductToCart";
import { Product } from "../../entities/product/types";

const ProductCard = (product: Product) => {
  const { id, nameRu, price, weight, imageUrl } = product;
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const nameUpperCase = nameRu.slice(0, 1).toUpperCase() + nameRu.slice(1);
  return (
    <li className={s.ProductCard}>
      <Link to={`/product/${id}`}>
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

export { ProductCard };
