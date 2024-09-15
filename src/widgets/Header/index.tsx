import s from "./header.module.scss";
const Header = () => {
  return (
    <header className={s.header}>
      <a className={s.logo} href="#!">
        <img src="/images/HeaderLogoIcon.svg" alt="logo" />
      </a>
      <div className={s.wrapper}>
        <img className={s.image} src="/images/burger-img.png" alt="burger" />
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
