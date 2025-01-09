import s from "../../shared/style/modal.module.scss";
import { useEffect, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "../../shared/ui/SVGIcons/UserIcon";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { useEscapeHandler } from "../../shared/lib/hooks/useEscapeHandler";
import { ResponseServer } from "../../shared/ui/ResponseServer";
import { fetchAuthorizationThunk } from "../../entities/profile/thunks/fetchAuthorizationThunk";
import { resetServerResponsesProfile } from "../../entities/profile/userSlice";
import { authorizationInputs } from "./authorizationInputs";
import { FormInput } from "../../shared/ui/FormInput/";

interface formValues {
  login: string;
  password: string;
}
const AuthorizationModal = () => {
  const [formValues, setFormValues] = useState<formValues>({
    login: "",
    password: "",
  });
  const loading = useAppSelector((state) => state.profile.loading);
  const errorServer = useAppSelector((state) => state.profile.errorServer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (errorServer !== null) {
      dispatch(resetServerResponsesProfile());
    }
  }, [formValues]); // eslint-disable-line react-hooks/exhaustive-deps
  useEscapeHandler();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={s.overlay} onClick={() => navigate("/")}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <UserIcon />
        </div>
        <div className={s.column}>
          <h3 className={s.title}>Авторизация</h3>
          <form
            className={s.form}
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(fetchAuthorizationThunk(formValues));
            }}
          >
            {authorizationInputs.map((fields) => {
              const { text, name } = fields;
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
                  {...fields}
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
            {errorServer && <ResponseServer {...errorServer} />}
            <div className={s.bottom} style={{ marginTop: "auto" }}>
              <h3 className={s.title}>Регистрация</h3>
              <Link to="/registration">
                <button className={s.button}>Регистрация</button>
              </Link>
            </div>
          </form>
        </div>
        <Link to="/" className={s.close}>
          <CloseIcon></CloseIcon>
        </Link>
      </div>
    </div>
  );
};

export { AuthorizationModal };
