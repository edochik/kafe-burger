import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import s from "./ModalForm.module.scss";
import { data } from "./ModalForm";
import { Link, useNavigate } from "react-router-dom";

const ModalOrder = () => {
  const [receiving, setReceiving] = useState("pickup");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className={s.overlay} onClick={onClickClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <img className={s.image} src="/images/donut.png" alt="donut" />
        </div>
        <div className={s.column}>
          <h2 className={s.title}>Доставка</h2>
          <form className={s.form}>
            <input
              className={s.name}
              type="text"
              placeholder="Ваше имя"
              ref={inputRef}
              required
            />
            <input
              className={s.phone}
              type="text"
              placeholder="Телефон"
              required
            />
            <div className={s.wrapper_radio}>
              {data.map((item, index) => (
                <label
                  key={item.id}
                  className={s.label}
                  onClick={() => setReceiving(item.nameEn)}
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
            {receiving === "pickup" ? (
              <>
                <input
                  className={s.address}
                  type="text"
                  placeholder="Улица, дом, квартира"
                  required
                />
                <div className={s.wrapper}>
                  <input
                    className={s.floor}
                    type="text"
                    placeholder="Этаж"
                    required
                  />
                  <input
                    className={s.intercom}
                    type="text"
                    placeholder="Домофон"
                    required
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <button className={s.button}>Оформить</button>
          </form>
        </div>
        <Link to="/" className={s.close}>
          <CloseIcon></CloseIcon>
        </Link>
      </div>
    </div>
  );
};

export { ModalOrder };
