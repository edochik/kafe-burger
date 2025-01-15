import { Link, useNavigate } from "react-router-dom";
import s from "./Modal.module.scss";
import { CloseIcon } from "../SVGIcons/CloseIcons";
import { useEscapeHandler } from "../../lib/hooks/useEscapeHandler";

interface ModalProps {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}

const Modal = ({ leftComponent, rightComponent }: ModalProps) => {
  const navigate = useNavigate();
  useEscapeHandler();
  return (
    <div className={s.overlay} onClick={() => navigate("/")}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>{leftComponent}</div>
        <div className={s.column}>{rightComponent}</div>
        <Link to="/" className={s.close}>
          <CloseIcon />
        </Link>
      </div>
    </div>
  );
};
export { Modal };
