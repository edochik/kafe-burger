import { ToggleProductButton } from "../../shared/ui/ToggleProductButton/";
import { CartItem } from "../Cart/cartSlice.js";
import s from "./ProductCart.module.scss";

const ProductCart = (props: CartItem) => {
  const { id, nameRu, price, weight, imageUrl, count } = props;
  return (
    <div className={s.productcart}>
      <img className={s.image} src={imageUrl} alt={`фотография ${nameRu}`} />
      <h4 className={s.title}>{nameRu}</h4>
      <p className={s.weight}>{weight}г</p>
      <p className={s.price}>{price}₽</p>
      <div className={s.button}>
        <ToggleProductButton count={count} />
      </div>
    </div>
  );
};

export { ProductCart };
