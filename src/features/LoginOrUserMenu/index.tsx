import { Link, useLocation, useNavigate } from "react-router-dom";
import s from "./LoginOrUserMenu.module.scss";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks/hooks";
import { useEffect, useRef, useState } from "react";
import { fetchLogoutThunk } from "@entities/profile/thunks/fetchLogoutThunk";
import { useCloseHandler } from "@shared/lib/hooks/useCloseHandler";

const LoginOrUserMenu = () => {
  const { isAuthorization } = useAppSelector((state) => state.profile);
  const { login, role } = useAppSelector((state) => state.profile.data.user);
  const location = useLocation();
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  useCloseHandler(toggle, setToggle, ref);
  
  useEffect(() => {
    if (
      isAuthorization && 
      ["/registration", "/authorization"].includes(location.pathname)
    ) {
      navigate("/");
    }
  }, [isAuthorization, location, navigate]);

  if (isAuthorization === false) {
    return (
      <Link
        className={s.link}
        to="/authorization"
        state={{ modal: true, background: location }}
      >
        Войти
      </Link>
    );
  }

  return (
    <div className={s.RenderLinkOrUser} ref={ref}>
      <button
        className={classNames({
          [s.link]: true,
          [s.connect]: isAuthorization,
        })}
        onClick={() => setToggle((prev) => !prev)}
      >
        {login}
      </button>
      {toggle && (
        <ul className={s.list}>
          <li className={s.item} onClick={() => setToggle(false)}>
            <Link to="/profile">Профиль</Link>
          </li>
          <li className={s.item} onClick={() => setToggle(false)}>
            <Link to="/history-order">Заказы</Link>
          </li>
          {role === "admin" && (
            <>
              <li className={s.item} onClick={() => setToggle(false)}>
                <Link to="/create-product">Создать</Link>
              </li>
              <li className={s.item} onClick={() => setToggle(false)}>
                <Link to="/delete-product">Удалить</Link>
              </li>
            </>
          )}
          <li className={s.item}>
            <Link
              to="/"
              onClick={() => {
                setToggle(false);
                dispatch(fetchLogoutThunk());
              }}
            >
              Выйти
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export { LoginOrUserMenu as RenderLinkOrUser };
