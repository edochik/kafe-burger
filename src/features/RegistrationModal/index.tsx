import s from "../../shared/style/modal.module.scss";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";

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
  const [confirmPassword, setConfirmPassword] = useState(""); // поля пароля
  const [isMatchPassword, setIsMatchPassword] = useState(true); // проверка пароля
  const [isValuesEmpty, setIsValuesEmpty] = useState(true); // если значение пустое хотя бы одно
  const [errorServer, setErrorServer] = useState(""); // ошибка на сервере информация
  const [inputField, setInputField] = useState(""); // подсвечивание ошибки с сервер
  const [isUserRegister, setIsUserRegister] = useState(false); // пользователь зарегистрировался
  const [isDisable, setIsDisable] = useState(false); // при отправке кнопка становится disabled

  const navigate = useNavigate();
  const refFirstName = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (refFirstName.current) {
      refFirstName.current.focus();
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsUserRegister(false);
        navigate("/");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, refFirstName]);

  const handleChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsMatchPassword(true);
    setIsValuesEmpty(true);
    setErrorServer("");
    if (Object.values(formValues).some((value) => value.length === 0)) {
      setIsValuesEmpty(false);
      return;
    }
    setIsDisable(true);
    if (formValues.password === confirmPassword) {
      try {
        const response = await fetch(
          "https://chip-patch-papaya.glitch.me/registr",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formValues,
            }),
          }
        );
        if (!response.ok) {
          const error = await response.json();
          setErrorServer(error.message);
          setInputField(error.field);
          return;
        }
        setErrorServer("");
        setConfirmPassword("");
        setInputField("");
        setFormValues((prev) => {
          const result = Object.create(null);
          for (const elem in prev) {
            result[elem] = "";
          }
          return result;
        });
        setIsUserRegister(true);
      } catch (error) {
      } finally {
        setIsDisable(false);
      }
    } else {
      setIsMatchPassword(false);
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
                  onChange={(e) => handleChangeInput(e)}
                  ref={refFirstName}
                  pattern="[а-яёА-ЯЁ]*"
                  aria-label="Имя"
                  required
                  onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!/^[а-яёА-ЯЁ]+$/.test(e.target.value)) {
                      e.target.setCustomValidity(
                        "Имя должно содержать только кириллические буквы."
                      );
                    } else {
                      e.target.setCustomValidity("");
                    }
                  }}
                />
                <input
                  className={s.input}
                  type="text"
                  placeholder="Фамилия"
                  value={formValues.lastName}
                  name="lastName"
                  minLength={2}
                  onChange={(e) => handleChangeInput(e)}
                  aria-label="Фамилия"
                  pattern="[а-яёА-ЯЁ]*"
                  onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!/^[а-яёА-ЯЁ]+$/.test(e.target.value)) {
                      e.target.setCustomValidity(
                        "Фамилия должна содержать только кириллические буквы."
                      );
                    } else {
                      e.target.setCustomValidity("");
                    }
                  }}
                  required
                />
                <input
                  className={classNames({
                    [s.input]: true,
                    [s.error]: inputField === "email",
                  })}
                  type="email"
                  placeholder="Email"
                  value={formValues.email}
                  name="email"
                  onChange={(e) => handleChangeInput(e)}
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
                  onChange={(e) => handleChangeInput(e)}
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
                    onChange={(e) => handleChangeInput(e)}
                    aria-label="Этаж"
                    required
                  />
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Квартира"
                    value={formValues.apartment}
                    name="apartment"
                    onChange={(e) => handleChangeInput(e)}
                    aria-label="Квартира"
                    required
                  />
                </div>
                <h4 className={s.subtitle}>Введите логин</h4>
                <input
                  className={classNames({
                    [s.input]: true,
                    [s.error]: inputField === "login",
                  })}
                  type="text"
                  placeholder="Логин"
                  value={formValues.login}
                  name="login"
                  minLength={4}
                  onChange={(e) => handleChangeInput(e)}
                  aria-label="Логин"
                  pattern="[a-zA-Z]*"
                  title="Логин должен содержать только латинские буквы"
                  required
                  onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!/^[a-zA-Z]+$/.test(e.target.value)) {
                      e.target.setCustomValidity(
                        "Логин должен содержать только латинские буквы."
                      );
                    } else {
                      e.target.setCustomValidity("");
                    }
                  }}
                />
                <h4 className={s.subtitle}>Введите пароль</h4>
                <input
                  className={classNames({
                    [s.input]: true,
                    [s.error]: inputField === "password",
                  })}
                  type="password"
                  placeholder="Пароль"
                  value={formValues.password}
                  name="password"
                  minLength={6}
                  onChange={(e) => handleChangeInput(e)}
                  aria-label="Пароль"
                  required
                />
                <input
                  className={classNames({
                    [s.input]: true,
                    [s.error]: inputField === "password",
                  })}
                  type="password"
                  placeholder="Повторите пароль"
                  value={confirmPassword}
                  name="confirmPassword"
                  minLength={6}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  aria-label="Повторите пароль"
                  required
                />
                {!isMatchPassword && (
                  <div className={s.message}>Пароли должны совпадать</div>
                )}
                {!isValuesEmpty && (
                  <div className={s.message}>
                    Одно или несколько полей пустые
                  </div>
                )}
                {errorServer && <div className={s.message}>{errorServer}</div>}
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
