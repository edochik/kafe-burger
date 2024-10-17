import s from "../../shared/style/modal.module.scss";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";

const AuthorizationModal = () => {
  const [formValues, setFormValues] = useState({
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
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (inputRef.current !== null && name === "login") {
      if (!/^[a-zA-Z]*$/.test(value)) {
        inputRef.current.setCustomValidity(
          "Логин может содержать только буквы от a - Z."
        );
      } else {
        inputRef.current.setCustomValidity("");
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <div className={s.overlay} onClick={onClickClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <UserIcon />
        </div>
        <div className={s.column}>
          <h3 className={s.title}>Авторизация</h3>
          <form className={s.form} onSubmit={handleSubmit}>
            <input
              className={s.input}
              type="text"
              placeholder="Логин"
              name="login"
              value={formValues.login}
              onChange={(e) => handleChangeInput(e)}
              aria-label="Логин"
              minLength={3}
              ref={inputRef}
              pattern="[a-zA-Z]*"
              required
            />
            <input
              className={s.input}
              type="password"
              placeholder="Пароль"
              name="password"
              value={formValues.password}
              onChange={(e) => handleChangeInput(e)}
              aria-label="Пароль"
              minLength={6}
              required
            />
            <button type="submit" className={s.button}>
              Войти
            </button>
            <div className={s.bottom} style={{ marginTop: "auto" }}>
              <h3 className={s.title}>Регистрация</h3>
              <Link to="/registration">
                <button className={s.button}>Регистрация</button>
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
