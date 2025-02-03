import s from "./Header.module.scss";
import { LogoIcon } from "../../shared/ui/SVGIcons/LogoIcon";
import { BurgerIcon } from "../../shared/ui/SVGIcons/BurgerIcon";
import { RenderLinkOrUser } from "../../features/LoginOrUserMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.Header}>
      <div className={s.top}>
        <Link className={s.logo} to="/">
          <LogoIcon className={s.logo_icon} optionalClass={s.logo_optional} />
        </Link>
        <RenderLinkOrUser />
      </div>
      <div className={s.wrapper}>
        <BurgerIcon className={s.burger_icon} />
        <div className={s.info}>
          <h1 className={s.visually_hidden}>
            Кафе с доставкой бургеров, шаурмы, салатов и других блюд
          </h1>
          <p className={s.title}>
            Только самые<br></br>
            <span className={s.color}>сочные бургеры!</span>
          </p>
          <span className={s.delivery}>Бесплатная доставка от 599₽</span>
        </div>
      </div>
    </header>
  );
};
export { Header };
