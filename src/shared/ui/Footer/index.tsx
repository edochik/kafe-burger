import { Link } from "react-router-dom";
import { LogoIcon } from "../SVGIcons/LogoIcon";
import s from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.column}>
          <Link className={s.logo} to="/">
            <LogoIcon
              className={s.logo_icon}
              optionalClass={s.optional_class}
            />
          </Link>
          <div>
            <div>© YouMeal, 2024</div>
            <div>Design: Anastasia Ilina</div>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.inner}>
            <p className={s.text}>Номер для заказа</p>
            <a className={s.phone} href="tel:+79999999999">
              +7(999)999-99-99
            </a>
          </div>
          <div className={s.inner}>
            <p className={s.text}>Мы в соцсетях</p>
            <ul className={s.list}>
              <li className={s.item}>
                <a className={s.link} href="#!">
                  <img
                    className={s.image}
                    src="./images/vk.svg"
                    alt="logo vk"
                  />
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#!">
                  <img
                    className={s.image}
                    src="./images/telegram.svg"
                    alt="logo telegram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
