import { LogoIcon } from "../../shared/ui/SVGIcons/LogoIcon";
import s from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.column}>
        <a className={s.logo} href="#!">
          <LogoIcon
            style={{ width: 304, height: 66 }}
            mainColor={"#FF7020"}
            optionalColor={"white"}
          />
        </a>
        <div>
          <div>© YouMeal, 2022</div>
          <div>Design: Anastasia Ilina</div>
        </div>
      </div>
      <div className={s.column}>
        <div className={s.inner}>
          <p className={s.text}>Номер для заказа</p>
          <a className={s.phone} href="tel:+79308333811">
            +7(930)833-38-11
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
    </footer>
  );
};

export { Footer };
