import s from "./OrderModal.module.scss";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { data } from "./data";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/Button";
import { DonutIcon } from "../../shared/ui/SVGIcons/DonutIcon";
import { Input } from "../../shared/ui/Input/Input";

const OrderModal = () => {
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
          <DonutIcon />
        </div>
        <div className={s.column}>
          <h3 className={s.title}>Доставка</h3>
          <form className={s.form}>
            <Input
              placeholder="Ваше имя"
              style={{ marginBottom: 8 }}
              ref={inputRef}
            />
            <Input placeholder="Телефон" style={{ marginBottom: 16 }} />
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
            {receiving === "pickup" && (
              <>
                <Input
                  placeholder="Улица, дом, квартира"
                  style={{ marginBottom: 8 }}
                />
                <div className={s.wrapper}>
                  <Input placeholder="Этаж" />
                  <Input placeholder="Домофон" />
                </div>
              </>
            )}
            <Button
              content="оформить заказ"
              variant="secondary"
              style={{ marginTop: "auto" }}
            />
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
