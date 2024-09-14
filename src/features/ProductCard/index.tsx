import s from "./ProductCard.module.scss";
import { ProductCardProps } from "./productcart.js";
const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {
    id,
    nameRu,
    nameEn,
    price,
    categoryEn,
    categoryRu,
    weight,
    imageAddress,
  } = props;
  return (
    <div className={s.productcard}>
      <img className={s.image} src={imageAddress} alt={nameRu} />
      <p className={s.price}>{price}₽</p>
      <h3 className={s.title}>{nameRu}</h3>
      <p className={s.weight}>{weight}г</p>
      <button className={s.button}>Добавить</button>
    </div>
  );
};

export { ProductCard };
