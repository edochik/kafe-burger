import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.scss";
const NotFoundPage = () => {
  return (
    <div className={s.NotFoundPage}>
      <div className={s.container}>
        <h1 className={s.title}>Страница не найдена</h1>
        <p className={s.text}>
          Проверьте корректность введённого адреса или повторите попытку позже
        </p>
        <Link className={s.go_back} to="/">
          🏃‍♂️ Вернуться обратно
        </Link>
        <img
          className={s.images}
          src="./images/notFoundIcon.svg"
          alt="фото страница не найдена"
        />
      </div>
    </div>
  );
};

export { NotFoundPage };
