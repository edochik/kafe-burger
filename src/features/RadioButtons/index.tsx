import s from "./RadioButtons.module.scss";
import { RadioButton } from "../RadioButton";
import { useAppSelector } from "../../shared/lib/hooks/hooks";

const RadioButtons = () => {
  const { categories } = useAppSelector((state) => state.categories);
  return (
    <div className={s.RadioButtons}>
      <fieldset className={s.fieldset}>
        {categories.map((category) => (
          <RadioButton key={category.id} {...category} />
        ))}
      </fieldset>
    </div>
  );
};

export { RadioButtons };
