import s from "./AuthorizationModal.module.scss";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../shared/ui/Button";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import { Input } from "../../shared/ui/Input/Input";

const AuthorizationModal = () => {
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
};

export { AuthorizationModal };
