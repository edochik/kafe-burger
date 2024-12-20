import s from "../../shared/style/modal.module.scss";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";
import { useFocusAndEscape } from "../../shared/hooks/useFocusAndEscape";
import { fetchRequest } from "../../utils/fetchRequest";
import { User } from "../../entities/user/userSlice";
import { IResponseServer } from "../../shared/domain/responseServer";
import { ResponseServer } from "../../shared/ui/ResponseServer/";
import { handleInvalidInput } from "../../utils/handleInvalidInput";

const RegistrationModal = () => {
  const [formValues, setFormValues] = useState({
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

  const [confirmPassword, setConfirmPassword] = useState(""); // второй ввод пароля
  const [responseServer, serResponseServer] = useState<IResponseServer | null>(
    null
  );
  const [isUserRegister, setIsUserRegister] = useState(false); // пользователь зарегистрировался
  const [isDisable, setIsDisable] = useState(false); // при отправке кнопка становится disabled
  useEffect(() => {
    serResponseServer(null);
    setIsDisable(false);
  }, [formValues, confirmPassword]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  useFocusAndEscape(inputRef);
  const handleChangeFormValues = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    serResponseServer(null);
    if (Object.values(formValues).some((value) => value.length === 0)) {
      serResponseServer({
        status: "error",
        message: "Все поля должны быть заполнены",
      });
      return;
    }
    if (formValues.password !== confirmPassword) {
      serResponseServer({
        status: "error",
        message: "Пароли должны совпадать",
        field: "password",
      });
      return;
    }
    setIsDisable(true);
    try {
      await fetchRequest<Partial<User>>(formValues, "/register", "POST");
      setConfirmPassword("");
      setFormValues((prev) => {
        const result = Object.create(null);
        for (const elem in prev) {
          result[elem] = "";
        }
        return result;
      });
      setIsUserRegister(true);
    } catch (error) {
      const serverError = error as IResponseServer;
      serResponseServer(serverError);
    } finally {
      setIsDisable(false);
    }
  };

  return (
    <div className={s.overlay} onClick={() => navigate("/")}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <UserIcon />
        </div>
        <div className={s.column}>
          {!isUserRegister ? (
            <>
              <h3 className={s.title}>Регистрация</h3>
              <form className={s.form} onSubmit={handleSubmit}>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Имя"
                  value={formValues.firstName}
                  name="firstName"
                  minLength={2}
                  onChange={(e) => handleChangeFormValues(e)}
                  ref={inputRef}
                  pattern="[а-яёА-ЯЁ]*"
                  aria-label="Имя"
                  required
                  onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInvalidInput(
                      e,
                      "Имя должно содержать только кириллические буквы."
                    )
                  }
                />
                <input
                  className={s.input}
                  type="text"
                  placeholder="Фамилия"
                  value={formValues.lastName}
                  name="lastName"
                  minLength={2}
                  onChange={(e) => handleChangeFormValues(e)}
                  aria-label="Фамилия"
                  pattern="[а-яёА-ЯЁ]*"
                  onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInvalidInput(
                      e,
                      "Фамилия должна содержать только кириллические буквы."
                    )
                  }
                  required
                />
                <input
                  className={classNames({
                    [s.input]: true,
                    [s.input_error]: responseServer?.field === "email",
                  })}
                  type="email"
                  placeholder="Email"
                  value={formValues.email}
                  name="email"
                  onChange={(e) => handleChangeFormValues(e)}
                  aria-label="почта"
                  required
                />
                <PhoneInput
                  country={"ru"}
                  value={formValues.phone}
                  onChange={(e) =>
                    setFormValues((prev) => ({ ...prev, phone: e }))
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
                  value={formValues.address}
                  name="address"
                  onChange={(e) => handleChangeFormValues(e)}
                  aria-label="Улица, дом, квартира"
                  required
                />
                <div className={s.wrapper}>
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Этаж"
                    value={formValues.floor}
                    name="floor"
                    onChange={(e) => handleChangeFormValues(e)}
                    aria-label="Этаж"
                    required
                  />
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Квартира"
                    value={formValues.apartment}
                    name="apartment"
                    onChange={(e) => handleChangeFormValues(e)}
                    aria-label="Квартира"
                    required
                  />
                </div>
                <h4 className={s.subtitle}>Введите логин</h4>
                <input
                  className={classNames({
                    [s.input]: true,
                    [s.input_error]: responseServer?.field === "login",
                  })}
                  type="text"
                  placeholder="Логин"
                  value={formValues.login}
                  name="login"
                  autoComplete="username"
                  minLength={4}
                  onChange={(e) => handleChangeFormValues(e)}
                  aria-label="Логин"
                  pattern="[a-zA-Z]*"
                  onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInvalidInput(
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
                    [s.input_error]: responseServer?.field === "password",
                  })}
                  type="password"
                  placeholder="Пароль"
                  value={formValues.password}
                  name="password"
                  autoComplete="new-password"
                  minLength={6}
                  onChange={(e) => handleChangeFormValues(e)}
                  aria-label="Пароль"
                  required
                />
                <input
                  className={classNames({
                    [s.input]: true,
                    [s.input_error]: responseServer?.field === "password",
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
                {responseServer && <ResponseServer {...responseServer} />}
                <button type="submit" className={s.button} disabled={isDisable}>
                  Зарегистрироваться
                </button>
              </form>
            </>
          ) : (
            <>
              <div className={s.register}>Пользователь зарегистрирован</div>
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
