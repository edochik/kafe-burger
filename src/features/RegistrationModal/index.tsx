import s from "../../shared/style/modal.module.scss";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import { validationWordCyrilliс, validationWordLatin } from "./validationInput";
import PhoneInput from "react-phone-input-2";

const RegistrationModal = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    floor: "",
    intercom: "",
    login: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const refFirstName = useRef<HTMLInputElement>(null);
  const refLastName = useRef<HTMLInputElement>(null);
  const refLogin = useRef<HTMLInputElement>(null);
  const refConfirmPassword = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (refFirstName.current) {
      refFirstName.current.focus();
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
  }, [navigate, refFirstName]);

  const onClickClose = () => {
    navigate("/");
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    if (refFirstName.current !== null && name === "firstName") {
      refFirstName.current.setCustomValidity(
        validationWordCyrilliс(value, "Имя")
      );
    }
    if (refLastName.current !== null && name === "lastName") {
      refLastName.current.setCustomValidity(
        validationWordCyrilliс(value, "Фамилия")
      );
    }
    if (refLogin.current !== null && name === "login") {
      refLogin.current.setCustomValidity(validationWordLatin(value, "Логин"));
    }
    //! проблема с обновлением когда вводим ???========================================================
    //!================================================================================================
    //!================================================================================================
    //!================================================================================================
    if (refConfirmPassword.current !== null && name === "confirmPassword") {
      const confirmPassword = formValues["confirmPassword"] + value;
      if (confirmPassword === formValues["password"]) {
        refConfirmPassword.current.setCustomValidity("");
      } else {
        refConfirmPassword.current.setCustomValidity(
          "Пароли должны быть одинаковые"
        );
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(event);
  };

  return (
    <div className={s.overlay} onClick={onClickClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <UserIcon />
        </div>
        <div className={s.column}>
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
              ref={refLastName}
              pattern="[а-яёА-ЯЁ]*"
              required
            />
            <input
              className={s.input}
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
              onChange={(e) => setFormValues((prev) => ({ ...prev, phone: e }))}
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
                placeholder="Домофон"
                value={formValues.intercom}
                name="intercom"
                onChange={(e) => handleChangeInput(e)}
                aria-label="Домофон"
                required
              />
            </div>
            <h4 className={s.subtitle}>Введите логин</h4>
            <input
              className={s.input}
              type="text"
              placeholder="Логин"
              value={formValues.login}
              name="login"
              minLength={4}
              onChange={(e) => handleChangeInput(e)}
              ref={refLogin}
              aria-label="Логин"
              required
            />
            <h4 className={s.subtitle}>Введите пароль</h4>
            <input
              className={s.input}
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
              className={s.input}
              type="password"
              placeholder="Повторите пароль"
              value={formValues.confirmPassword}
              name="confirmPassword"
              minLength={6}
              onChange={(e) => handleChangeInput(e)}
              aria-label="Повторите пароль"
              ref={refConfirmPassword}
              required
            />
            <button type="submit" className={s.button}>
              Зарегистрироваться
            </button>
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
