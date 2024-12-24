import { Link } from "react-router-dom";
import { deliveryMethods } from "../../features/OrderModal/DeliveryMethods";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import s from "./HistoryOrders.module.scss";

const HistoryOrders = () => {
  const { orders, orderDetails } = useAppSelector(
    (state) => state.historyOrder
  );
  const methods = Object.fromEntries(
    deliveryMethods.map((method) => [method.nameEn, method.nameRu])
  );

  const isAuthorization = useAppSelector(
    (state) => state.profile.isAuthorization
  );
  if (!isAuthorization) {
    return (
      <div className={s.HistoryOrders}>
        <div className={s.container}>
          <h2 className={s.title}>История заказов</h2>
          <div className={s.loader}></div>
        </div>
      </div>
    );
  }
  return (
    <div className={s.HistoryOrders}>
      <div className={s.container}>
        <table className={s.table}>
          <caption className={s.caption}>История заказов</caption>
          <thead className={s.thead}>
            <tr className={s.tr}>
              <th className={s.th} scope="col">
                №
              </th>
              <th className={s.th} scope="col">
                Способ доставки
              </th>
              <th className={s.th} scope="col">
                Адрес доставки
              </th>
              <th className={s.th} scope="col">
                Стоимость
              </th>
            </tr>
          </thead>
          <tbody className={s.tbody}>
            {orders.map((order) => {
              const { id, deliveryMethod, address, apartment, floor, total } =
                order;
              return (
                <tr className={s.tr} key={id}>
                  <th className={s.th}>{id}</th>
                  <td className={s.td}>{methods[deliveryMethod]}</td>
                  <td className={s.td}>
                    {address} этаж {floor} квартира {apartment}
                  </td>
                  <td className={s.td}>{total} ₽</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link className={s.go_back} to="/">
          🏃‍♂️ Вернуться обратно
        </Link>
      </div>
    </div>
  );
};

export { HistoryOrders };

//  Заказ Способ доставки Место доставки  Продукт

//                                         burger  кол-во 1 шт цена 689 сумма заказа общая

//   1      самовывоз      ---------       burger  кол-во 1 шт цена 689 сумма заказа общая

//                                         burger  кол-во 1 шт цена 689 сумма заказа общая

//   2      доставка       улица и т.д

//   Заказ Способ  доставки Место доставки
//   1      самовывоз      ---------

//   детали заказа
//   burger  кол-во 1 шт цена 689 сумма заказа общая
//   burger  кол-во 1 шт цена 689 сумма заказа общая
//   burger  кол-во 1 шт цена 689 сумма заказа общая
