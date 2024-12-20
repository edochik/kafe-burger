import s from "../../shared/style/modal.module.scss";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import classNames from "classnames";
import { useAppDispatch } from "../../shared/lib/hooks/hooks";
import { registerUser } from "../../entities/user/userSlice";
import { useFocusAndEscape } from "../../shared/hooks/useFocusAndEscape";
import { fetchRequest } from "../../utils/fetchRequest";
import { Data } from "./interface";
import { IResponseServer } from "../../shared/domain/responseServer";
import { ResponseServer } from "../../shared/ui/ResponseServer";
import { handleInvalidInput } from "../../utils/handleInvalidInput";

const AuthorizationModal = () => {
  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [responseServer, serResponseServer] = useState<IResponseServer | null>(
    null
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => serResponseServer(null), [formValues]);
  useFocusAndEscape(inputRef);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDisabled(true);
    try {
      const response: Data = await fetchRequest<Partial<Data>>(
        formValues,
        "/auth",
        "POST"
      );
      const user = response.user;
      dispatch(registerUser({ ...user }));
    } catch (error) {
      const serverError = error as IResponseServer;
      serResponseServer(serverError);
    } finally {
      setIsDisabled(false);
    }
  };
  return (
    <div className={s.overlay} onClick={() => navigate("/")}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <UserIcon />
        </div>
        <div className={s.column}>
          <h3 className={s.title}>Авторизация</h3>
          <form className={s.form} onSubmit={handleSubmit}>
            <input
              className={classNames({
                [s.input]: true,
                [s.input_error]: responseServer?.field === "login",
              })}
              type="text"
              placeholder="Логин"
              name="login"
              value={formValues.login}
              onChange={(e) => handleChangeInput(e)}
              aria-label="Логин"
              minLength={3}
              ref={inputRef}
              pattern="[a-zA-Z]*"
              onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInvalidInput(
                  e,
                  "Логин должен содержать только латинские буквы."
                )
              }
              required
            />
            <input
              className={classNames({
                [s.input]: true,
                [s.input_error]: responseServer?.field === "password",
              })}
              type="password"
              placeholder="Пароль"
              name="password"
              value={formValues.password}
              autoComplete="current-password"
              onChange={(e) => handleChangeInput(e)}
              aria-label="Пароль"
              minLength={6}
              required
            />
            <button type="submit" className={s.button} disabled={isDisabled}>
              Войти
            </button>
            {responseServer && <ResponseServer {...responseServer} />}
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
