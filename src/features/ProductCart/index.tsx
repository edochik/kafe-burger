import { ToggleProductButton } from "../../shared/ui/ToggleProductButton/";
import s from "./ProductCart.module.scss";

const ProductCart = () => {
  return (
    <div className={s.productcart}>
      <img className={s.image} src="./images/meat-bomb.jpg" alt="" />
      <h4 className={s.title}>Супер сырный</h4>
      <p className={s.weight}>512г</p>
      <p className={s.price}>550₽</p>
      <div className={s.button}>
        <ToggleProductButton />
      </div>
    </div>
  );
};

export { ProductCart };
