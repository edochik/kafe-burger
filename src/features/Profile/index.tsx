import { useAppSelector } from "../../shared/lib/hooks/hooks";
import s from "./Profile.module.scss";

const Profile = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <ul className={s.Profile}>
      <li>Имя:{user.firstName}</li>
      <li>Фамилия:{user.lastName}</li>
      <li>Логин:{user.login}</li>
      <li>Email:{user.email}</li>
      <li>Телефон:{user.phone}</li>
      <li>Адрес:{user.address}</li>
      <li>Этаж:{user.floor}</li>
      <li>Квартира:{user.apartment}</li>
    </ul>
  );
};

export { Profile };
