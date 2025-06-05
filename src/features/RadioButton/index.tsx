import { useAppDispatch, useAppSelector } from "@shared/lib/hooks/hooks";
import { setSelectCategory } from "@entities/categories/categoriesSlice";
import s from "./RadioButton.module.scss";
import { Category } from "@entities/categories/types.js";

const RadioButton = (props: Category) => {
  const { id, categoryEn, categoryRu, categoryImg } = props;
  const { selectCategory } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  return (
    <label
      className={s.RadioButton}
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
