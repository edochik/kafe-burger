import s from "./main.module.scss";
import { RadioButtons } from "../../features/RadioButtons/";
const Main = () => {
  return (
    <main className={s.main}>
      <RadioButtons />
    </main>
  );
};

export { Main };
