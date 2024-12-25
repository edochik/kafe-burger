import { Cart } from "../../entities/cart/types.js";
import { ToggleProductButton } from "../../shared/ui/ToggleProductButton/";
import s from "./ProductCart.module.scss";

const ProductCart = (props: Cart) => {
  const { id, nameRu, price, weight, imageUrl, count } = props;

  return (
    <li className={s.ProductCart}>
      <img className={s.image} src={imageUrl} alt={`фотография ${nameRu}`} />
      <h4 className={s.title}>{nameRu}</h4>
      <p className={s.weight}>{weight}г</p>
      <p className={s.price}>{price}₽</p>
      <div className={s.button}>
        <ToggleProductButton count={count} id={id} />
      </div>
    </li>
  );
};

export { ProductCart };
