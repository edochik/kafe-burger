import s from "../../shared/style/modal.module.scss";
import { useEffect, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { DonutIcon } from "../../shared/ui/SVGIcons/DonutIcon";
import PhoneInput from "react-phone-input-2";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { useEscapeHandler } from "../../shared/hooks/useEscapeHandler";
import { updateUser } from "../../entities/user/userSlice";
import { deliveryMethods } from "./DeliveryMethods";
import { User } from "../../entities/user/types.js";
import { fetchOrderThunk } from "../../entities/cart/thunk/fetchOrderThunk";
import { updateSuccessServer } from "../../entities/cart/cartSlice";

const OrderModal = () => {
  const { user } = useAppSelector((state) => state.profile.data);
  const { cart, successServer, loading } = useAppSelector(
    (state) => state.cart
  );
  const { id, firstName, phone, address, floor, apartment } = user;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  useEscapeHandler();
  useEffect(() => {
    if (successServer !== null) {
      dispatch(updateSuccessServer());
    }
  }, [navigate]);

  const handleUpdateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(updateUser({ key: name as keyof User, value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const order = cart.map((item) => {
      const { id, count } = item;
      return { id, count };
    });
    dispatch(fetchOrderThunk({ user, deliveryMethod, order }));
  };

  return (
    <div className={s.overlay} onClick={() => navigate("/")}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <DonutIcon />
        </div>
        {successServer?.status === "success" ? (
          <div className={s.column}>
            <div className={s.text}>№ заказа: {successServer.orderId}</div>
            <div className={s.text}>Сумма заказа: {successServer.total} ₽</div>
          </div>
        ) : (
          <div className={s.column}>
            <h3 className={s.title}>Доставка</h3>
            <form className={s.form} onSubmit={handleSubmit}>
              <input
                className={s.input}
                type="text"
                placeholder="Ваше имя"
                value={firstName}
                name="firstName"
                minLength={2}
                onChange={(e) => handleUpdateUser(e)}
                aria-label="Ваше имя"
                autoFocus
                required
              />
              <PhoneInput
                country={"ru"}
                value={phone}
                onlyCountries={["ru"]}
                masks={{ ru: "+.(...) ...-..-.." }}
                inputClass={s.input}
                placeholder="Телефон"
                disableCountryCode={true}
                onChange={(e: string) => {
                  dispatch(updateUser({ key: phone as keyof User, value: e }));
                }}
                inputProps={{
                  required: true,
                  minLength: 11,
                }}
              />
              <div className={s.wrapper_radio}>
                {deliveryMethods.map((item, index) => (
                  <label
                    key={item.id}
                    className={s.label}
                    onClick={() => setDeliveryMethod(item.nameEn)}
                  >
                    <input
                      className={s.receiving}
                      name="receiving"
                      type="radio"
                      value={item.nameEn}
                      defaultChecked={index === 0}
                      required
                    />
                    <span className={s.radio}></span>
                    <span className={s.span}>{item.nameRu}</span>
                  </label>
                ))}
              </div>
              {deliveryMethod !== "pickup" && (
                <>
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Улица, дом, квартира"
                    value={address}
                    name="address"
                    onChange={(e) => handleUpdateUser(e)}
                    aria-label="Улица, дом, квартира"
                    required
                  />
                  <div className={s.wrapper}>
                    <input
                      className={s.input}
                      type="text"
                      placeholder="Этаж"
                      value={floor}
                      name="floor"
                      onChange={(e) => handleUpdateUser(e)}
                      aria-label="Этаж"
                      required
                    />
                    <input
                      className={s.input}
                      type="text"
                      placeholder="Квартира"
                      value={apartment}
                      name="apartment"
                      onChange={(e) => handleUpdateUser(e)}
                      aria-label="Квартира"
                      required
                    />
                  </div>
                </>
              )}
              {cart.length === 0 ? (
                <div className={s.info}>В корзине пока пусто :(</div>
              ) : (
                <button
                  className={s.button}
                  type="submit"
                  disabled={loading === "pending"}
                >
                  Оформить заказ
                </button>
              )}
            </form>
          </div>
        )}
        <Link to="/" className={s.close}>
          <CloseIcon />
        </Link>
      </div>
    </div>
  );
};

export { OrderModal };
