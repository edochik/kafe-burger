import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { Categories } from "../RadioButtons/getCategories";
import { setSelectCategory } from "../RadioButtons/categoriesSlice";
import s from "./RadioButton.module.scss";

const RadioButton = (props: Categories) => {
  const { id, categoryEn, categoryRu, categoryImg } = props;
  const { selectCategory } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  return (
    <label
      className={s.label}
      onClick={() => dispatch(setSelectCategory(categoryEn))}
    >
      <input
        className={s.input}
        type="radio"
        name="product"
        value={categoryEn}
        defaultChecked={selectCategory === categoryEn}
      />
      <span className={s.radio}></span>
      <span className={s.name}>{categoryRu}</span>
      <img className={s.image} src={categoryImg} alt={`logo ${categoryEn}`} />
    </label>
  );
};

export { RadioButton };
