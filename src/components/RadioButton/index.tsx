import s from "./radiobutton.module.scss";
import { RadioButtonProps } from "./radiobutton";

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const { id, nameRu, nameEn, imageAddress, value, onChange } = props;
  const onClickChooseProduct = () => {
    onChange(nameEn);
  };
  return (
    <label className={s.label} onClick={onClickChooseProduct}>
      <input
        className={s.input}
        type="radio"
        name="product"
        value={nameEn}
        defaultChecked={value === nameEn}
      />
      <span className={s.radio}></span>
      <span className={s.name}>{nameRu}</span>
      <img className={s.image} src={imageAddress} alt={`logo ${nameEn}`} />
    </label>
  );
};

export { RadioButton };
