import { Link } from "react-router-dom";
import s from "./ProductCard.module.scss";
import { Product } from "../../shared/data/productData";
import { Button } from "../../shared/ui/Button";
import { addProductCart } from "../Cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
export interface IProductCardProps extends Product {}
const ProductCard = (props: IProductCardProps) => {
  const { id, nameRu, price, weight, imageUrl } = props;
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector((state) => state.productsInCart);

  const onClickAppProduct = () => {
    dispatch(addProductCart({ id, nameRu, price, weight, imageUrl, count: 1 }));
  };
  return (
    <div className={s.productcard}>
      <Link to={`/product/${id}`}>
        <img className={s.image} src={imageUrl} alt={nameRu} />
      </Link>
      <p className={s.price}>{price}₽</p>
      <h3 className={s.title}>{nameRu}</h3>
      <p className={s.weight}>{weight}г</p>
      <Button
        variant="button_primary"
        content={
          productsInCart.some((product) => product.id === id)
            ? "Добавлено"
            : "Добавить"
        }
        onClick={() => onClickAppProduct()}
      />
    </div>
  );
};

export { ProductCard };
