import s from "./RadioButton.module.scss";
import { RadioButtonProps } from "./radiobutton";

const RadioButton = (props: RadioButtonProps) => {
  const { id, nameRu, nameEn, imageUrl, value, onChange } = props;

  return (
    <label className={s.label} onClick={() => onChange(nameEn)}>
      <input
        className={s.input}
        type="radio"
        name="product"
        value={nameEn}
        defaultChecked={value === nameEn}
      />
      <span className={s.radio}></span>
      <span className={s.name}>{nameRu}</span>
      <img className={s.image} src={imageUrl} alt={`logo ${nameEn}`} />
    </label>
  );
};

export { RadioButton };
