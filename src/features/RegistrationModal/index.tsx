import s from "./RegistrationModal.module.scss";
import { useEffect, useRef } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/Button";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import { Input } from "../../shared/ui/Input/Input";

const RegistrationModal = () => {
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
            <Input placeholder="Повторите пароль" style={{ marginBottom: 8 }} />
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
