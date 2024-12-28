import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import s from "./Profile.module.scss";
import {
  resetError,
  resetMessage,
  updateUser,
} from "../../entities/user/userSlice";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { ResponseServer } from "../../shared/ui/ResponseServer";
import { User } from "../../entities/user/types.js";
import { fetchUpdateUserThunk } from "../../entities/user/thunks/fetchUpdateUserThunk";

const translateField: Partial<User> = {
  firstName: "Имя",
  lastName: "Фамилия",
  email: "Почта",
  phone: "Телефон",
  address: "Адрес",
  floor: "Этаж",
  apartment: "Квартира",
  login: "Логин",
};

const Profile = () => {
  const [password, setPassword] = useState("");
  const { user } = useAppSelector((state) => state.profile.data);
  const {
    loading,
    errorServer: error,
    successServer: message,
  } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (error !== null) {
      dispatch(resetError());
    }
    if (message !== null) {
      dispatch(resetMessage());
    }
  }, [user, password]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(updateUser({ key: name as keyof User, value }));
  };

  return (
    <form
      className={s.Profile}
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(fetchUpdateUserThunk({ ...user, password }));
      }}
    >
      <ul className={s.list}>
        {Object.entries(user).map(([key, value]) => {
          if (key in translateField) {
            const translatedKey = translateField[key as keyof User];
            return (
              <li className={s.item} key={key}>
                <label className={s.label}>
                  {translatedKey}:&nbsp;
                  <input
                    className={classNames({
                      [s.input]: true,
                      [s.gray]: key === "login",
                    })}
                    type={key === "email" ? "email" : "text"}
                    name={key}
                    value={value || ""}
                    autoComplete={key === "login" ? "username" : ""}
                    onChange={(e) => handleChangeUser(e)}
                    disabled={key === "login"}
                  />
                </label>
              </li>
            );
          }
          return null;
        })}
      </ul>
      {error && <ResponseServer {...error} />}
      {message && <ResponseServer {...message} />}
      <label className={s.label}>
        <span className={s.span}>Подтвердите:&nbsp;</span>
        <input
          className={classNames({
            [s.input]: true,
            [s.input_error]: error?.field === "password",
          })}
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button
        type="submit"
        className={s.button}
        disabled={loading === "pending"}
      >
        Изменить профиль
      </button>
      <Link className={s.go_back} to="/">
        🏃‍♂️ Вернуться обратно
      </Link>
    </form>
  );
};

export { Profile };
