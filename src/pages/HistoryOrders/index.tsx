import { Link } from "react-router-dom";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import s from "./HistoryOrders.module.scss";
import { IOrderDetails } from "../../entities/user/types";
import { OrderDetails } from "../../features/OrderDetails/";

const HistoryOrders = () => {
  const { orders, orderDetails } = useAppSelector(
    (state) => state.historyOrder
  );
  const { isAuthorization } = useAppSelector((state) => state.profile);
  const detailsMap: Map<number, IOrderDetails[]> = new Map();
  for (const order of orderDetails) {
    const orderId = order.orderId;
    if (!detailsMap.has(orderId)) {
      detailsMap.set(orderId, []);
    }
    const key = detailsMap.get(orderId);
    key?.push(order);
  }

  const formatOrders = orders.map((order) => {
    const { createdAt, ...rest } = order;
    const date = new Date(order.createdAt);
    const formatDate = date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
    });
    return { ...rest, date: formatDate };
  });

  return (
    <div className={s.HistoryOrders}>
      <div className={s.container}>
        <ul className={s.orders}>
          {formatOrders.map((order) => {
            const { id, date, total } = order;
            const values = detailsMap.get(id);
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
      </div>
    </div>
  );
};

export { HistoryOrders };
