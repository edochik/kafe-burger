import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import s from "./Profile.module.scss";
import { updateUser, User } from "../../entities/user/userSlice";
import { useState } from "react";

const translate: Partial<User> = {
  firstName: "Имя",
  lastName: "Фамилия",
  email: "Почта",
  phone: "Телефон",
  address: "Адрес",
  floor: "Этаж",
  apartment: "Квартира",
  login: "Логин",
};

interface ServerError {
  message: string;
  field?: string;
}

const Profile = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(updateUser({ key: name as keyof User, value }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { id, isAuthorization, ...rest } = user;
      const request = await fetch(
        `https://chip-patch-papaya.glitch.me/api/account/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: rest, password }),
        }
      );
      if (!request.ok) {
        const error = await request.json();
        throw error;
      }
      // return response.json();
    } catch (error) {
      const serverError = error as ServerError;
      setError(serverError.message);
      if (serverError.field) {
        setError(serverError.field);
      }
    }
  };
  return (
    <form className={s.Profile} onSubmit={handleSubmit}>
      <ul className={s.list}>
        {Object.entries(user).map(([key, value]) => {
          if (key in translate) {
            const translatedKey = translate[key as keyof User];
            return (
              <li className={s.item} key={key}>
                <label className={s.label}>
                  {translatedKey}:&nbsp;
                  <input
                    className={s.input}
                    type={key === "email" ? "email" : "text"}
                    name={key}
                    value={value || ""}
                    autoComplete={key === "login" ? "username" : ""}
                    onChange={(e) => handleChangeUser(e)}
                  />
                </label>
              </li>
            );
          }
          return null;
        })}
      </ul>
      <label className={s.label}>
        <span className={s.span}>Подтвердите:&nbsp;</span>
        <input
          className={s.input}
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" className={s.button}>
        Изменить профиль
      </button>
      <Link className={s.link} to="/">
        🏃‍♂️ Вернуться обратно
      </Link>
    </form>
  );
};

export { Profile };
