import s from "../../shared/style/modal.module.scss";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { data } from "./data";
import { Link, useNavigate } from "react-router-dom";
import { DonutIcon } from "../../shared/ui/SVGIcons/DonutIcon";
import PhoneInput from "react-phone-input-2";
import { validationValues } from "./validationValues";
import { changeReceiving } from "./changeReceiving";

const OrderModal = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    receiving: "pickup",
    address: "",
    floor: "",
    intercom: "",
  });
  console.log(formValues);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigate("/");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, inputRef]);
  const onClickClose = () => {
    navigate("/");
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement> | string,
    name: string
  ) => validationValues(e, name, setFormValues);

  const handleChangeReceiving = (arg: string) => {
    changeReceiving(arg, setFormValues);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className={s.overlay} onClick={onClickClose}>
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
              value={formValues.name}
              name="name"
              minLength={2}
              onChange={(e) => handleChangeInput(e, "name")}
              aria-label="Ваше имя"
              ref={inputRef}
              required
            />
            <PhoneInput
              country={"ru"}
              value={formValues.phone}
              onChange={(e) => handleChangeInput(e, "phone")}
              onlyCountries={["ru"]}
              masks={{ ru: "+.(...) ...-..-.." }}
              inputClass={s.input}
              placeholder="Телефон"
              disableCountryCode={true}
              inputProps={{
                required: true,
              }}
            />
            <div className={s.wrapper_radio}>
              {data.map((item, index) => (
                <label
                  key={item.id}
                  className={s.label}
                  onClick={() => handleChangeReceiving(item.nameEn)}
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
                  onChange={(e) => handleChangeInput(e, "address")}
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
                    onChange={(e) => handleChangeInput(e, "floor")}
                    aria-label="Этаж"
                    required
                  />
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Домофон"
                    value={formValues.intercom}
                    name="intercom"
                    onChange={(e) => handleChangeInput(e, "intercom")}
                    aria-label="Домофон"
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
