import { ResponseServer as ResponseServerProps } from "../../types/responseServer";
import s from "./ResponseServer.module.scss";

const ResponseServer = ({ status, message }: ResponseServerProps) => {
  if (status === "error") {
    return <div className={s.error}>{message}</div>;
  }
  return <div className={s.success}>{message}</div>;
};

export { ResponseServer };
