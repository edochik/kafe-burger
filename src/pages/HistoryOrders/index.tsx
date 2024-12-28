import { Link } from "react-router-dom";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import s from "./HistoryOrders.module.scss";
import { OrderDetails } from "../../features/OrderDetails/";
import { getDetailsMap } from "./getDetailsMap";
import { getFormatOrders } from "./getFormatOrders";

const HistoryOrders = () => {
  const { orders, orderDetails } = useAppSelector(
    (state) => state.historyOrder
  );
  const detailsMap = getDetailsMap(orderDetails);
  const formatOrders = getFormatOrders(orders);
  return (
    <div className={s.HistoryOrders}>
      <div className={s.container}>
        <ul className={s.orders}>
          {formatOrders.reverse().map((order) => {
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
