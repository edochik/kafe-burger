import s from "./Authorization.module.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { ResponseServer } from "../../shared/ui/ResponseServer";
import { fetchAuthorizationThunk } from "../../entities/profile/thunks/fetchAuthorizationThunk";
import { resetServerResponsesProfile } from "../../entities/profile/userSlice";
import { authorizationInputs } from "./authorizationInputs";
import { FormInput } from "../../shared/ui/FormInput";
import { Modal } from "../../shared/ui/Modal";

interface formValues {
  login: string;
  password: string;
}

const Authorization = () => {
  const [formValues, setFormValues] = useState<formValues>({
    login: "",
    password: "",
  });
  const location = useLocation();
  const loading = useAppSelector((state) => state.profile.loading);
  const errorServer = useAppSelector((state) => state.profile.errorServer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (errorServer !== null) {
      dispatch(resetServerResponsesProfile());
    }
  }, [formValues]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const content = (
    <>
      <form
        className={s.form}
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(fetchAuthorizationThunk(formValues));
        }}
      >
        <fieldset className={s.fieldset}>
          <legend className={s.title}>Авторизация</legend>
          {authorizationInputs.map(({ text, name, ...field }, index) => {
            const value = formValues[name as keyof formValues];
            return (
              <FormInput
                key={name}
                classInput={classNames({
                  [s.input]: true,
                  [s.input_error]: name === errorServer?.field,
                })}
                value={value}
                showLabel={false}
                placeholder={text}
                onChange={(e) => handleInputChange(e)}
                ariaLabel={text}
                autoFocus={index === 0}
                name={name}
                {...field}
              />
            );
          })}
          <button
            type="submit"
            className={s.button}
            disabled={loading === "pending"}
          >
            Войти
          </button>
        </fieldset>
      </form>
      {errorServer && <ResponseServer {...errorServer} />}
      <Link
        to="/registration"
        state={{
          modal: true,
          background: location.state?.background || location,
        }}
      >
        <button className={s.button} disabled={loading === "pending"}>
          Регистрация
        </button>
      </Link>
    </>
  );
  return <Modal leftComponent={<UserIcon />} rightComponent={content} />;
};

export { Authorization };
