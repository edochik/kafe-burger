import s from "../../shared/style/modal.module.scss";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/Button";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";

const AuthorizationModal = () => {
  const [inputValues, setInputValues] = useState({
    login: "",
    password: "",
  });
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
          <h3 className={s.title}>Авторизация</h3>
          <form className={s.form}>
            <input
              className={s.input}
              type="text"
              placeholder="Логин"
              name="login"
              value={inputValues.login}
              onChange={(e) => handleChangeInput(e)}
              aria-label="Логин"
              minLength={4}
              ref={inputRef}
              required
            />
            <input
              className={s.input}
              type="password"
              placeholder="Пароль"
              name="password"
              value={inputValues.password}
              onChange={(e) => handleChangeInput(e)}
              aria-label="Пароль"
              minLength={6}
              required
            />
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
