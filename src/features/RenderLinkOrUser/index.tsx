import { Link } from "react-router-dom";
import s from "./RenderLinkOrUser.module.scss";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { useEffect, useRef, useState } from "react";
import { fetchLogoutThunk } from "../../entities/user/thunks/fetchLogoutThunk";

const RenderLinkOrUser = () => {
  const { isAuthorization } = useAppSelector((state) => state.profile);
  const { login } = useAppSelector((state) => state.profile.data.user);
  const [toggle, setToggle] = useState(false);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setToggle(false);
      }
    };
    const scroll = () => {
      if (toggle) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("scroll", scroll);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("scroll", scroll);
    };
  }, [toggle]);

  if (isAuthorization === false) {
    return (
      <Link className={s.link} to="/authorization">
        Войти
      </Link>
    );
  }

  return (
    <div className={s.RenderLinkOrUser}>
      <button
        className={classNames({
          [s.link]: true,
          [s.connect]: isAuthorization,
        })}
        onClick={() => setToggle(!toggle)}
      >
        {login}
      </button>
      {toggle && (
        <ul className={s.list} ref={ref}>
          <li className={s.item} onClick={() => setToggle(false)}>
            <Link to="/profile">Профиль</Link>
          </li>
          <li className={s.item} onClick={() => setToggle(false)}>
            <Link to="/history-order">Заказы</Link>
          </li>
          <li className={s.item}>
            <Link to="/" onClick={() => dispatch(fetchLogoutThunk())}>
              Выйти
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export { RenderLinkOrUser };
