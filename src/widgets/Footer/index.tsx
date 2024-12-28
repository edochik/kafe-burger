import { LogoIcon } from "../../shared/ui/SVGIcons/LogoIcon";
import s from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.column}>
          <a className={s.logo} href="#!">
            <LogoIcon
              style={{ width: 304, height: 66 }}
              mainColor={"#FF7020"}
              optionalColor={"white"}
            />
          </a>
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
                  <img className={s.image} src="/images/vk.svg" alt="logo vk" />
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#!">
                  <img
                    className={s.image}
                    src="/images/telegram.svg"
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
