import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import s from "./Modal.module.scss";
import { data } from "./data";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../shared/ui/Button";
import { DonutIcon } from "../../shared/ui/SVGIcons/DonutIcon";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import { Input } from "../../shared/ui/Input/Input";

const Modal = () => {
  const [receiving, setReceiving] = useState("pickup");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { type } = useParams();
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
  if (type === "order") {
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
  }
  if (type === "authorization") {
    return (
      <div className={s.overlay} onClick={onClickClose}>
        <div className={s.modal} onClick={(e) => e.stopPropagation()}>
          <div className={s.column}>
            <UserIcon />
          </div>
          <div className={s.column}>
            <h3 className={s.title}>Авторизация</h3>
            <form className={s.form}>
              <Input
                placeholder="Логин"
                ref={inputRef}
                style={{ marginBottom: 8 }}
              />
              <Input placeholder="Пароль" style={{ marginBottom: 16 }} />
              <Button content="Войти" variant="secondary" />
              <div className={s.bottom} style={{ marginTop: "auto" }}>
                <h3 className={s.title}>Регистрация</h3>
                <Link to="/registration">
                  <Button content="Регистрация" variant="secondary" />
                </Link>
              </div>
            </form>
          </div>
          <Link to="/" className={s.close}>
            <CloseIcon></CloseIcon>
          </Link>
        </div>
      </div>
    );
  }
  if (type === "registration") {
    return (
      <div className={s.overlay} onClick={onClickClose}>
        <div className={s.modal} onClick={(e) => e.stopPropagation()}>
          <div className={s.column}>
            <UserIcon />
          </div>
          <div className={s.column}>
            <h3 className={s.title}>Регистрация</h3>
            <form className={s.form}>
              <Input
                placeholder="Имя"
                ref={inputRef}
                style={{ marginBottom: 8 }}
              />
              <Input placeholder="Фамилия" style={{ marginBottom: 8 }} />
              <Input placeholder="Email" style={{ marginBottom: 8 }} />
              <Input placeholder="Телефон" style={{ marginBottom: 16 }} />
              <h4 className={s.subtitle}>Адрес доставки</h4>
              <Input
                placeholder="Улица, дом, квартира"
                style={{ marginBottom: 8 }}
              />
              <div className={s.wrapper}>
                <Input placeholder="Этаж" />
                <Input placeholder="Домофон" />
              </div>
              <h4 className={s.subtitle}>Введите пароль</h4>
              <Input placeholder="Пароль" style={{ marginBottom: 8 }} />
              <Input
                placeholder="Повторите пароль"
                style={{ marginBottom: 8 }}
              />
              <Button content="Зарегистрироваться" variant="secondary" />
            </form>
          </div>
          <Link to="/" className={s.close}>
            <CloseIcon></CloseIcon>
          </Link>
        </div>
      </div>
    );
  }
  return null;
};

export { Modal };
