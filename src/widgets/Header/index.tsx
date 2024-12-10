import s from "./header.module.scss";
import { LogoIcon } from "../../shared/ui/SVGIcons/LogoIcon";
import { BurgerIcon } from "../../shared/ui/SVGIcons/BurgerIcon";
import { RenderLinkOrUser } from "../../features/RenderLinkOrUser/";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.top} style={{ zIndex: 99 }}>
        <a className={s.logo} href="#!">
          <LogoIcon
            style={{ width: 153, height: 35 }}
            mainColor={"white"}
            optionalColor={"#FFA132"}
          />
        </a>
        <RenderLinkOrUser/>
      </div>
      <div className={s.wrapper}>
        <BurgerIcon size="326" />
        <div className={s.info}>
          <h1 className={s.title}>
            Только самые<br></br>{" "}
            <span className={s.color}>сочные бургеры!</span>
          </h1>
          <span className={s.delivery}>Бесплатная доставка от 599₽</span>
        </div>
      </div>
    </header>
  );
};
export { Header };
