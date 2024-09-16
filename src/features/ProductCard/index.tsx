import { Link } from "react-router-dom";
import { CartItem } from "../../app/interface";
import s from "./ProductCard.module.scss";
import { ProductCardProps } from "../../shared/data/productData";
interface IProductCardProps extends ProductCardProps {
  setCart: (updateFunction: (prev: CartItem[]) => CartItem[]) => void;
}
const ProductCard = (props: IProductCardProps) => {
  const { id, nameRu, price, weight, imageAddress, setCart } = props;
  const onClickAddCard = () => {
    setCart((prev: CartItem[]) => {
      const ids = prev.map((product) => product.id);
      if (!ids.includes(id)) {
        return [
          ...prev,
          {
            id,
            nameRu,
            price,
            weight,
            imageAddress,
            count: 1,
          },
        ];
      }
      return prev;
    });
  };

  return (
    <div className={s.productcard}>
      <Link to={`/product/${id}`}>
        <img className={s.image} src={imageAddress} alt={nameRu} />
      </Link>

      <p className={s.price}>{price}₽</p>
      <h3 className={s.title}>{nameRu}</h3>
      <p className={s.weight}>{weight}г</p>
      <button className={s.button} onClick={onClickAddCard}>
        Добавить
      </button>
    </div>
  );
};

export { ProductCard };
