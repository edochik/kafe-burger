import classNames from "classnames";
import s from "./ToggleButton.module.scss";
interface ButtonProps {
  content: string;
  onClick?: () => void;
  variant?: string;
  style?: Record<string, string>;
}

const ToggleButton = (props: ButtonProps) => {
  const { content, onClick, variant, style } = props;
  const buttonClass = classNames({
    [s.button]: true,
    [s.button_primary]: variant === "primary",
    [s.button_secondary]: variant === "secondary",
  });

  return (
    <button style={style} className={buttonClass} onClick={onClick}>
      {content[0].toUpperCase() + content.slice(1)}
    </button>
  );
};

export { ToggleButton };
