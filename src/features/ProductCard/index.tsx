import { Link } from "react-router-dom";
import { CartItem } from "../../app/interface";
import s from "./ProductCard.module.scss";
import { ProductCardProps } from "../../shared/data/productData";
import { Button } from "../../shared/ui/Button";
import { addProduct } from "./helper";
export interface IProductCardProps extends ProductCardProps {
  setCart: (updateFunction: (prev: CartItem[]) => CartItem[]) => void;
}
const ProductCard = (props: IProductCardProps) => {
  const { id, nameRu, price, weight, imageUrl, setCart } = props;
  // console.log(props);
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
        content="Добавить"
        onClick={() => setCart((prev: CartItem[]) => addProduct(prev, props))}
      />
    </div>
  );
};

export { ProductCard };
