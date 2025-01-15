import s from "./Registration.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { fetchRegistrationThunk } from "../../entities/profile/thunks/fetchRegistrationThunk";
import { ResponseServer } from "../../shared/ui/ResponseServer";
import { resetServerResponsesProfile } from "../../entities/profile/userSlice";
import { FormInput } from "../../shared/ui/FormInput";
import { User } from "../../entities/profile/types";
import { registrationInput } from "./registrationInput";
import { Modal } from "../../shared/ui/Modal";

type UserFormData = Omit<User, "id" | "role"> & { password: string };

const Registration = () => {
  const [dataUser, setDataUser] = useState<UserFormData>({
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

  useEffect(() => {
    if (errorServer !== null || successServer !== null) {
      dispatch(resetServerResponsesProfile());
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

  const content = (
    <form className={s.form} onSubmit={handleSubmit}>
      <fieldset className={s.fieldset}>
        <legend className={s.legend}>Регистрация</legend>
        {registrationInput.map((field, index) => {
          const { name, text, ...spread } = field;
          const value = dataUser[name as keyof UserFormData];
          return (
            <FormInput
              key={name}
              name={name}
              classInput={classNames({
                [s.input]: true,
                [s[name]]: true,
                [s.input_error]: name === errorServer?.field,
              })}
              ariaLabel={`${text} пользователя`}
              placeholder={text}
              value={value}
              onChange={(e) => handleInputChange(e)}
              showLabel={false}
              {...spread}
            />
          );
        })}
        <div className={s.phone}>
          <PhoneInput
            inputClass={s.input}
            country={"ru"}
            value={dataUser.phone}
            onChange={(e) => setDataUser((prev) => ({ ...prev, phone: e }))}
            onlyCountries={["ru"]}
            masks={{ ru: "+.(...) ...-..-.." }}
            placeholder="Телефон"
            disableCountryCode={true}
            inputProps={{
              required: true,
              minLength: 11,
            }}
          />
        </div>
        <h3 className={s.subtitle_delivery}>Адрес доставки</h3>
        <h3 className={s.subtitle_login}>Введите логин</h3>
        <h3 className={s.subtitle_password}>Введите пароль</h3>
        <input
          className={classNames({
            [s.input]: true,
            [s["confirm_password"]]: true,
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
        {errorServer && (
          <div className={s.error}>
            <ResponseServer {...errorServer} />
          </div>
        )}
        {clientError && <div className={s.client_error}>{clientError}</div>}
        <button
          type="submit"
          className={s.button}
          disabled={loading === "pending"}
        >
          Зарегистрироваться
        </button>
      </fieldset>
    </form>
  );

  const successResult = (
    <div className={s.success}>
      <div className={s.text}>{successServer && successServer.message}</div>
      <Link className={s.link} to="/authorization">
        <button className={s.button}>Войти</button>
      </Link>
    </div>
  );

  return (
    <Modal
      leftComponent={<UserIcon />}
      rightComponent={!successServer ? content : successResult}
    />
  );
};

export { Registration };
