import s from "../../shared/style/modal.module.scss";
import { useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { data } from "./data";
import { Link, useNavigate } from "react-router-dom";
import { DonutIcon } from "../../shared/ui/SVGIcons/DonutIcon";
import PhoneInput from "react-phone-input-2";
import { changeReceiving } from "./changeReceiving";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import { useFocusAndEscape } from "../../shared/hooks/useFocusAndEscape";
import { fetchRequest } from "../../utils/fetchRequest";
import { User } from "../../entities/user/userSlice.js";

const OrderModal = () => {
  const { id, firstName, phone, address, floor, apartment } = useAppSelector(
    (state) => state.user
  );
  
  const [formValues, setFormValues] = useState({
    firstName: firstName ? firstName : "",
    phone: phone ? phone : "",
    receiving: "pickup",
    address: address ? address : "",
    floor: floor ? floor : "",
    apartment: apartment ? apartment : "",
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useFocusAndEscape(inputRef);

  const handleChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      interface UpdateUser extends Omit<User, "receiving"> {
        receiving?: string;
      }
      const response = await fetchRequest<Partial<UpdateUser>>(
        { id, ...formValues },
        "/order",
        "PUT"
      );
    } catch (error) {
      
    }
  };

  return (
    <div className={s.overlay} onClick={() => navigate("/")}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <DonutIcon />
        </div>
        <div className={s.column}>
          <h3 className={s.title}>Доставка</h3>
          <form className={s.form} onSubmit={handleSubmit}>
            <input
              className={s.input}
              type="text"
              placeholder="Ваше имя"
              value={formValues.firstName}
              name="name"
              minLength={2}
              onChange={(e) => handleChangeInput(e)}
              aria-label="Ваше имя"
              ref={inputRef}
              required
            />
            <PhoneInput
              country={"ru"}
              value={formValues.phone}
              onChange={(e) => setFormValues((prev) => ({ ...prev, phone: e }))}
              onlyCountries={["ru"]}
              masks={{ ru: "+.(...) ...-..-.." }}
              inputClass={s.input}
              placeholder="Телефон"
              disableCountryCode={true}
              inputProps={{
                required: true,
                minLength: 11,
              }}
            />
            <div className={s.wrapper_radio}>
              {data.map((item, index) => (
                <label
                  key={item.id}
                  className={s.label}
                  onClick={() => changeReceiving(item.nameEn, setFormValues)}
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
                  <span className={s.text}>{item.nameRu}</span>
                </label>
              ))}
            </div>
            {formValues.receiving !== "pickup" && (
              <>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Улица, дом, квартира"
                  value={formValues.address}
                  name="address"
                  onChange={(e) => handleChangeInput(e)}
                  aria-label="Улица, дом, квартира"
                  required
                />
                <div className={s.wrapper}>
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Этаж"
                    value={formValues.floor}
                    name="floor"
                    onChange={(e) => handleChangeInput(e)}
                    aria-label="Этаж"
                    required
                  />
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Квартира"
                    value={formValues.apartment}
                    name="apartment"
                    onChange={(e) => handleChangeInput(e)}
                    aria-label="Квартира"
                    required
                  />
                </div>
              </>
            )}
            <button className={s.button} type="submit">
              Оформить заказ
            </button>
          </form>
        </div>
        <Link to="/" className={s.close}>
          <CloseIcon />
        </Link>
      </div>
    </div>
  );
};

export { OrderModal };
