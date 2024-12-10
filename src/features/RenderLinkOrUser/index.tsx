import { Link } from "react-router-dom";
import s from "./RenderLinkOrUser.module.scss";
import classNames from "classnames";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import { useEffect, useRef, useState } from "react";

const RenderLinkOrUser = () => {
  const { isAuthorization, login } = useAppSelector((state) => state.user);
  const [toggle, setToggle] = useState(false);
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
          <li className={s.item}>
            <a href="#!">Профиль</a>
          </li>
          <li className={s.item}>
            <a href="#!">Заказы</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export { RenderLinkOrUser };
