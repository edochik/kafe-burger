import s from "../../shared/style/modal.module.scss";
import { useEffect, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { useEscapeHandler } from "../../shared/lib/hooks/useEscapeHandler";
import { ResponseServer } from "../../shared/ui/ResponseServer";
import { customInvalidMessage } from "../../shared/lib/utils/customInvalidMessage";
import { fetchAuthorizationThunk } from "../../entities/profile/thunks/fetchAuthorizationThunk";
import { resetError } from "../../entities/profile/userSlice";

const AuthorizationModal = () => {
  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
  });
  const loading = useAppSelector((state) => state.profile.loading);
  const errorServer = useAppSelector((state) => state.profile.errorServer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (errorServer !== null) {
      dispatch(resetError());
    }
  }, [formValues]); // eslint-disable-line react-hooks/exhaustive-deps
  useEscapeHandler();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={s.overlay} onClick={() => navigate("/")}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <UserIcon />
        </div>
        <div className={s.column}>
          <h3 className={s.title}>Авторизация</h3>
          <form
            className={s.form}
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(fetchAuthorizationThunk(formValues));
            }}
          >
            <input
              className={classNames({
                [s.input]: true,
                [s.input_error]: errorServer?.field === "login",
              })}
              type="text"
              placeholder="Логин"
              name="login"
              value={formValues.login}
              onChange={(e) => handleInputChange(e)}
              aria-label="Логин"
              minLength={3}
              autoFocus
              pattern="[a-zA-Z]*"
              onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
                customInvalidMessage(
                  e,
                  "Логин должен содержать только латинские буквы."
                )
              }
              required
            />
            <input
              className={classNames({
                [s.input]: true,
                [s.input_error]: errorServer?.field === "password",
              })}
              type="password"
              placeholder="Пароль"
              name="password"
              value={formValues.password}
              autoComplete="current-password"
              onChange={(e) => handleInputChange(e)}
              aria-label="Пароль"
              minLength={6}
              required
            />
            <button
              type="submit"
              className={s.button}
              disabled={loading === "pending"}
            >
              Войти
            </button>
            {errorServer && <ResponseServer {...errorServer} />}
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
