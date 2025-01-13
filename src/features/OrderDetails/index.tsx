import { OrderDetail } from "../../entities/profile/types.js";
import s from "./OrderDetails.module.scss";

interface OrderDetailsProps {
  values: OrderDetail[];
}

const OrderDetails = ({ values }: OrderDetailsProps) => {
  return (
    <ul className={s.OrderDetails}>
      {values.map((value) => {
        const { id, price, count, imageUrl, nameRu } = value;
        return (
          <li className={s.order} key={id}>
            <img
              className={s.image}
              src={imageUrl}
              alt={`фотография ${nameRu}`}
            />
            <p className={s.name_ru}>{nameRu ? nameRu : "продукция удалена"}</p>
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
