import { OrderDetail } from "../../entities/profile/types.js";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import s from "./OrderDetails.module.scss";

interface OrderDetailsProps {
  values: OrderDetail[];
}

const OrderDetails = ({ values }: OrderDetailsProps) => {
  const { products } = useAppSelector((state) => state.products);
  const productsDictionary = Object.fromEntries(
    products.map((product) => [product.id, product])
  );
  console.log(products, "products");
  console.log(values, "values");
  return (
    <ul className={s.OrderDetails}>
      {values.map((value) => {
        const { id, price, productId, count } = value;
        // const imageUrl = productsDictionary[productId].imageUrl;
        // const nameRu = productsDictionary[productId].nameRu;
        // const categoryRu = productsDictionary[productId].categoryRu;
        return (
          <li className={s.order} key={id}>
            {/* <img
              className={s.image}
              src={imageUrl}
              alt={`фотография ${categoryRu} ${nameRu}`}
            /> */}
            {/* <p className={s.name_ru}>{nameRu} </p> */}
            <div className={s.wrapper}>
              <p className={s.count}>{count} шт.</p>
              <p className={s.price}>{price} ₽</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { OrderDetails };
