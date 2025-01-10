import { IResponseServer } from "../../types/IResponseServer";
import s from "./ResponseServer.module.scss";

// interface ResponseServerProps extends IResponseServer {
//   className?: string;
// }
type ResponseServerProps = IResponseServer;

const ResponseServer = ({
  status,
  message,
}: ResponseServerProps) => {
  if (status === "error") {
    return <div className={s.error}>{message}</div>;
  }
  return <div className={s.success}>{message}</div>;
};

export { ResponseServer };
