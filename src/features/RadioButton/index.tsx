import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { ButtonProps } from "../RadioButtons/radiobuttons";
import { selectCategory } from "../RadioButtons/selectSlice";
import s from "./RadioButton.module.scss";

const RadioButton = (props: ButtonProps) => {
  const { id, categoryEn, categoryRu, categoryImg } = props;
  const defaultValue = useAppSelector((state) => state.selectProduct);
  const dispatch = useAppDispatch();
  return (
    <label
      className={s.label}
      onClick={() => dispatch(selectCategory(categoryEn))}
    >
      <input
        className={s.input}
        type="radio"
        name="product"
        value={categoryEn}
        defaultChecked={defaultValue === categoryEn}
      />
      <span className={s.radio}></span>
      <span className={s.name}>{categoryRu}</span>
      <img className={s.image} src={categoryImg} alt={`logo ${categoryEn}`} />
    </label>
  );
};

export { RadioButton };
