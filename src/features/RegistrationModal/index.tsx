import s from "../../shared/style/modal.module.scss";
import { useEffect, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";
import { useEscapeHandler } from "../../shared/lib/hooks/useEscapeHandler";
import { customInvalidMessage } from "../../shared/lib/utils/customInvalidMessage";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { fetchRegistrationThunk } from "../../entities/profile/thunks/fetchRegistrationThunk";
import { ResponseServer } from "../../shared/ui/ResponseServer/";
import { resetError, resetMessage } from "../../entities/profile/userSlice";

const RegistrationModal = () => {
  const [dataUser, setDataUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    floor: "",
    apartment: "",
    login: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const { errorServer, successServer, loading } = useAppSelector(
    (state) => state.profile
  );
  const [clientError, setClientError] = useState<null | string>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEscapeHandler();
  useEffect(() => {
    if (errorServer !== null) {
      dispatch(resetError());
    }
    if (successServer !== null) {
      dispatch(resetMessage());
    }
    setClientError(null);
  }, [dataUser, confirmPassword]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setDataUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setClientError(null);
    if (Object.values(dataUser).some((value) => value.length === 0)) {
      setClientError("Все поля должны быть заполнены");
      return;
    }
    if (dataUser.password !== confirmPassword) {
      setClientError("Пароли должны совпадать");
      return;
    }
    dispatch(fetchRegistrationThunk({ ...dataUser }));
  };

  return (
    <div className={s.overlay} onClick={() => navigate("/")}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <UserIcon />
        </div>
        <div className={s.column}>
          {!successServer ? (
            <>
              <h3 className={s.title}>Регистрация</h3>
              <form className={s.form} onSubmit={handleSubmit}>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Имя"
                  value={dataUser.firstName}
                  name="firstName"
                  minLength={2}
                  onChange={(e) => handleInputChange(e)}
                  autoFocus
                  pattern="[а-яёА-ЯЁ]*"
                  aria-label="Имя"
                  required
                  onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
                    customInvalidMessage(
                      e,
                      "Имя должно содержать только кириллические буквы."
                    )
                  }
                />
                <input
                  className={s.input}
                  type="text"
                  placeholder="Фамилия"
                  value={dataUser.lastName}
                  name="lastName"
                  minLength={2}
                  onChange={(e) => handleInputChange(e)}
                  aria-label="Фамилия"
                  pattern="[а-яёА-ЯЁ]*"
                  onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
                    customInvalidMessage(
                      e,
                      "Фамилия должна содержать только кириллические буквы."
                    )
                  }
                  required
                />
                <input
                  className={classNames({
                    [s.input]: true,
                    [s.input_error]: errorServer?.field === "email",
                  })}
                  type="email"
                  placeholder="Email"
                  value={dataUser.email}
                  name="email"
                  onChange={(e) => handleInputChange(e)}
                  aria-label="почта"
                  required
                />
                <PhoneInput
                  country={"ru"}
                  value={dataUser.phone}
                  onChange={(e) =>
                    setDataUser((prev) => ({ ...prev, phone: e }))
                  }
                  onlyCountries={["ru"]}
                  masks={{ ru: "+.(...) ...-..-.." }}
                  inputClass={s.input}
                  placeholder="Телефон"
                  disableCountryCode={true}
                  inputProps={{
                    required: true,
                    minLength: 11,
                  }}
                />
                <h4 className={s.subtitle}>Адрес доставки</h4>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Улица, дом, квартира"
                  value={dataUser.address}
                  name="address"
                  onChange={(e) => handleInputChange(e)}
                  aria-label="Улица, дом, квартира"
                  required
                />
                <div className={s.wrapper}>
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Этаж"
                    value={dataUser.floor}
                    name="floor"
                    onChange={(e) => handleInputChange(e)}
                    aria-label="Этаж"
                    required
                  />
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Квартира"
                    value={dataUser.apartment}
                    name="apartment"
                    onChange={(e) => handleInputChange(e)}
                    aria-label="Квартира"
                    required
                  />
                </div>
                <h4 className={s.subtitle}>Введите логин</h4>
                <input
                  className={classNames({
                    [s.input]: true,
                    [s.input_error]: errorServer?.field === "login",
                  })}
                  type="text"
                  placeholder="Логин"
                  value={dataUser.login}
                  name="login"
                  autoComplete="username"
                  minLength={4}
                  onChange={(e) => handleInputChange(e)}
                  aria-label="Логин"
                  pattern="[a-zA-Z]*"
                  onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
                    customInvalidMessage(
                      e,
                      "Логин должен содержать только латинские буквы."
                    )
                  }
                  required
                />
                <h4 className={s.subtitle}>Введите пароль</h4>
                <input
                  className={classNames({
                    [s.input]: true,
                    [s.input_error]: errorServer?.field === "password",
                  })}
                  type="password"
                  placeholder="Пароль"
                  value={dataUser.password}
                  name="password"
                  autoComplete="new-password"
                  minLength={6}
                  onChange={(e) => handleInputChange(e)}
                  aria-label="Пароль"
                  required
                />
                <input
                  className={classNames({
                    [s.input]: true,
                    [s.input_error]: errorServer?.field === "password",
                  })}
                  type="password"
                  placeholder="Повторите пароль"
                  value={confirmPassword}
                  name="confirmPassword"
                  autoComplete="current-password"
                  minLength={6}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  aria-label="Повторите пароль"
                  required
                />
                {errorServer && <ResponseServer {...errorServer} />}
                {clientError && <div className={s.error}>{clientError}</div>}
                <button
                  type="submit"
                  className={s.button}
                  disabled={loading === "pending"}
                >
                  Зарегистрироваться
                </button>
              </form>
            </>
          ) : (
            <>
              <div className={s.register}>{successServer.message}</div>
              <Link className={s.link} to="/authorization">
                <button className={s.button}>Войти</button>
              </Link>
            </>
          )}
        </div>
        <Link to="/" className={s.close}>
          <CloseIcon></CloseIcon>
        </Link>
      </div>
    </div>
  );
};

export { RegistrationModal };
