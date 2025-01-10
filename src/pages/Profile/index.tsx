import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import s from "./Profile.module.scss";
import {
  resetServerResponsesProfile,
  updateUser,
} from "../../entities/profile/userSlice";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { ResponseServer } from "../../shared/ui/ResponseServer";
import { User } from "../../entities/profile/types";
import { fetchUpdateUserThunk } from "../../entities/profile/thunks/fetchUpdateUserThunk";
import { profileFields } from "./profileFields";
import { FormInput } from "../../shared/ui/FormInput/";

const Profile = () => {
  const [password, setPassword] = useState("");
  const { user } = useAppSelector((state) => state.profile.data);
  const {
    loading,
    errorServer: error,
    successServer: success,
  } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (error !== null || success !== null) {
      dispatch(resetServerResponsesProfile());
    }
  }, [user, password]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(updateUser({ key: name as keyof User, value }));
  };

  return (
    <div className={s.Profile}>
      <form
        className={s.form}
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(fetchUpdateUserThunk({ ...user, password }));
        }}
      >
        {profileFields.map((element) => {
          const { name, text, ...spread } = element;
          const value = user[name as keyof Omit<User, "id">];
          const isDisabled = name === "login";
          return (
            <FormInput
              key={name}
              classLabel={s[name] || ""}
              ariaLabel={`${text.slice(0, -1)} пользователя`}
              name={name}
              value={value}
              onChange={(e) => handleChangeUser(e)}
              text={text}
              {...spread}
              isDisabled={isDisabled}
            />
          );
        })}

        <label className={s.label}>
          Подтвердить:&nbsp;
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
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <ResponseServer {...error} />}
        {success && <ResponseServer {...success} />}
        <button
          type="submit"
          className={s.button}
          disabled={loading === "pending"}
        >
          Изменить профиль
        </button>
      </form>
      <Link className={s.go_back} to="/">
        🏃‍♂️ Вернуться обратно
      </Link>
    </div>
  );
};

export { Profile };
