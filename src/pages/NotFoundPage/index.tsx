import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.scss";
const NotFoundPage = () => {
  return (
    <div className={s.NotFoundPage}>
      <h1 className={s.title}>404</h1>
      <p className={s.text}>страница не найдена</p>
      <Link className={s.link} to="/">
        Вернуться обратно
      </Link>
    </div>
  );
};

export { NotFoundPage };
