import s from "../../shared/style/modal.module.scss";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/Button";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";

const RegistrationModal = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    floor: "",
    intercom: "",
    password: "",
  });
  const [repeatPassword, setRepeatPassword] = useState("");

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
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={s.overlay} onClick={onClickClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <UserIcon />
        </div>
        <div className={s.column}>
          <h3 className={s.title}>Регистрация</h3>
          <form className={s.form}>
            <input
              className={s.input}
              type="text"
              placeholder="Имя"
              value={inputValues.firstName}
              name="firstName"
              minLength={2}
              onChange={(e) => handleChangeInput(e)}
              ref={inputRef}
              aria-label="Имя"
              required
            />
            <input
              className={s.input}
              type="text"
              placeholder="Фамилия"
              value={inputValues.lastName}
              name="lastName"
              minLength={2}
              onChange={(e) => handleChangeInput(e)}
              aria-label="Фамилия"
              required
            />
            <input
              className={s.input}
              type="email"
              placeholder="Email"
              value={inputValues.email}
              name="email"
              onChange={(e) => handleChangeInput(e)}
              aria-label="почта"
              required
            />
            <input
              className={s.input}
              type="text"
              placeholder="Телефон"
              value={inputValues.phone}
              name="phone"
              minLength={11}
              maxLength={11}
              onChange={(e) => handleChangeInput(e)}
              aria-label="Телефон"
              required
            />
            <h4 className={s.subtitle}>Адрес доставки</h4>
            <input
              className={s.input}
              type="text"
              placeholder="Улица, дом, квартира"
              value={inputValues.address}
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
                value={inputValues.floor}
                name="floor"
                onChange={(e) => handleChangeInput(e)}
                aria-label="Этаж"
                required
              />
              <input
                className={s.input}
                type="text"
                placeholder="Домофон"
                value={inputValues.intercom}
                name="intercom"
                onChange={(e) => handleChangeInput(e)}
                aria-label="Домофон"
                required
              />
            </div>
            <h4 className={s.subtitle}>Введите пароль</h4>
            <input
              className={s.input}
              type="password"
              placeholder="Пароль"
              value={inputValues.password}
              name="password"
              minLength={6}
              onChange={(e) => handleChangeInput(e)}
              aria-label="Пароль"
              required
            />
            <input
              className={s.input}
              type="password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              name="repeatPassword"
              minLength={6}
              onChange={(e) => setRepeatPassword(e.target.value)}
              aria-label="Повторите пароль"
              required
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
};

export { RegistrationModal };
