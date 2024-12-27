import { Link } from "react-router-dom";
import s from "./ProductCard.module.scss";
import {
  addProductCart,
  incrementProduct,
} from "../../entities/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { Product } from "../../shared/domain/Product";
import { addProductToCart } from "../../shared/lib/utils/addProductToCart";

export interface ProductCardProps extends Product {}

const ProductCard = (product: ProductCardProps) => {
  const { id, nameRu, price, weight, imageUrl } = product;
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <li className={s.ProductCard}>
      <Link to={`/product/${id}`}>
        <img className={s.image} src={imageUrl} alt={nameRu} />
      </Link>
      <p className={s.price}>{price}₽</p>
      <h3 className={s.title}>{nameRu}</h3>
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
