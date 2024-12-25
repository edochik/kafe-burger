import { Link } from "react-router-dom";
import s from "./ProductCard.module.scss";
import {
  addProductCart,
  incrementProduct,
} from "../../entities/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { Product } from "../../shared/domain/Product.js";

export interface ProductCardProps extends Product {}

const ProductCard = (props: ProductCardProps) => {
  const { id, nameRu, price, weight, imageUrl } = props;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const onClickAppProduct = (id: number) => {
    if (!cart.some((product) => product.id === id)) {
      dispatch(
        addProductCart({ id, nameRu, price, weight, imageUrl, count: 1 })
      );
    } else {
      dispatch(incrementProduct(id));
    }
  };

  return (
    <li className={s.ProductCard}>
      <Link to={`/product/${id}`}>
        <img className={s.image} src={imageUrl} alt={nameRu} />
      </Link>
      <p className={s.price}>{price}₽</p>
      <h3 className={s.title}>{nameRu}</h3>
      <p className={s.weight}>{weight}г</p>
      <button className={s.button} onClick={() => onClickAppProduct(id)}>
        Добавить
      </button>
    </li>
  );
};

export { ProductCard };
