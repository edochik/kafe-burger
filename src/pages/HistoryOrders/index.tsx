import { Link } from "react-router-dom";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import s from "./HistoryOrders.module.scss";
import { getOrderDetailsMap } from "./getOrderDetailsMap";
import { getFormatOrders } from "./getFormatOrders";
import { OrderDetails } from "../../features/OrderDetails/";

const HistoryOrders = () => {
  const { orders, orderDetails } = useAppSelector(
    (state) => state.profile.data
  );
  const orderDetailsMap = getOrderDetailsMap(orderDetails);
  const formatOrders = getFormatOrders(orders);

  return (
    <section className={s.HistoryOrders}>
      <h2 className={s.title}>История заказов: </h2>
      <ul className={s.orders}>
        {formatOrders.reverse().map((order) => {
          const { id, date, total } = order;
          const values = orderDetailsMap.get(id);
          return (
            <li className={s.order} key={order.id}>
              <p className={s.date}>
                Заказ от {date} №{id}
              </p>
              <p className={s.total}>оплачено {total} ₽</p>
              {values && <OrderDetails values={values} />}
            </li>
          );
        })}
      </ul>
      <Link className={s.go_back} to="/">
        🏃‍♂️ Вернуться обратно
      </Link>
    </section>
  );
};

export { HistoryOrders };
