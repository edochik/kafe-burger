import { Link, useLocation, useNavigate } from "react-router-dom";
import s from "./Modal.module.scss";
import { CloseIcon } from "../SVGIcons/CloseIcons";
import { useEscapeHandler } from "../../lib/hooks/useEscapeHandler";
import { useEffect, useState } from "react";
import classNames from "classnames";

interface ModalProps {
  leftComponent: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const paths = ["authorization", "order", "product", "registration"];

const Modal = ({ leftComponent, rightComponent }: ModalProps) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const cleanPath = location.pathname.replace(/[^a-z]*/gi, (_) => "");
    if (paths.includes(cleanPath)) {
      setIsActive(true);
    }
  }, [setIsActive, location]);

  useEscapeHandler();

  if (rightComponent === null) {
    return (
      <div
        className={classNames({
          [s.overlay]: true,
          [s.active]: isActive,
        })}
        onClick={() => navigate("/")}
      >
        <div className={s.modal} onClick={(e) => e.stopPropagation()}>
          {leftComponent}
          <Link to="/" className={s.close}>
            <CloseIcon />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={classNames({
        [s.overlay]: true,
        [s.active]: isActive,
      })}
      onClick={() => navigate("/")}
    >
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
