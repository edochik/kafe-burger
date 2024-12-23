import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import s from "./Profile.module.scss";
import { updateUser } from "../../entities/user/userSlice";
import { useEffect, useState } from "react";
import { fetchRequest } from "../../utils/fetchRequest";
import classNames from "classnames";
import { ResponseServer } from "../../shared/ui/ResponseServer";
import { IResponseServer } from "../../shared/domain/responseServer";
import { User } from "../../entities/user/types.js";

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
  const [responseServer, setResponseServer] = useState<IResponseServer | null>(
    null
  );
  const [isDisabled, setDisabled] = useState(false);
  const user = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setResponseServer(null);
  }, [password, user]);

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(updateUser({ key: name as keyof User, value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisabled(true);
    try {
      const { isAuthorization, ...rest } = user;
      interface UpdateUser extends Omit<User, "password"> {
        password?: string;
      }
      const response = await fetchRequest<Partial<UpdateUser>>(
        { ...rest, password },
        "/account/update",
        "PUT"
      );
      setResponseServer(response);
    } catch (error) {
      const serverError = error as IResponseServer;
      setResponseServer(serverError);
    } finally {
      setDisabled(false);
    }
  };
  return (
    <form className={s.Profile} onSubmit={handleSubmit}>
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
      {responseServer && <ResponseServer {...responseServer} />}
      <label className={s.label}>
        <span className={s.span}>Подтвердите:&nbsp;</span>
        <input
          className={classNames({
            [s.input]: true,
            [s.input_error]: responseServer?.field === "password",
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
      <button type="submit" className={s.button} disabled={isDisabled}>
        Изменить профиль
      </button>
      <Link className={s.go_back} to="/">
        🏃‍♂️ Вернуться обратно
      </Link>
    </form>
  );
};

export { Profile };
