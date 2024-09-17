import React, { forwardRef } from "react";
import s from "./Input.module.scss";

interface InputProps {
  placeholder: string;
  style?: React.CSSProperties;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { placeholder, style } = props;
  return (
    <input
      className={s.input}
      type="text"
      placeholder={placeholder}
      style={style}
      ref={ref}
      required
    />
  );
});

export { Input };
