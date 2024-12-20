import { Link } from "react-router-dom";
import s from "./RenderLinkOrUser.module.scss";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { useEffect, useRef, useState } from "react";
import { logoutUser } from "../../entities/user/userSlice";

const RenderLinkOrUser = () => {
  const { isAuthorization, login } = useAppSelector((state) => state.user);
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

  const userLogout = async () => {
    try {
      const response = await fetch(
        "https://chip-patch-papaya.glitch.me/api/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errorDetail);
      }
      dispatch(logoutUser());
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message); 
      }
    }
  };
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
          <li className={s.item}>
            <a href="#!">Заказы</a>
          </li>
          <li className={s.item}>
            <Link to="/" onClick={() => userLogout()}>
              Выйти
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export { RenderLinkOrUser };
