import s from "./RadioButtons.module.scss";
import { RadioButton } from "../RadioButton";
import { getButtonsData } from "./radiobuttons";
import { products } from "../../shared/data/productData";


const RadioButtons = () => {
  const buttons = getButtonsData(products);
  return (
    <div className={s.radiobuttons}>
      <fieldset className={s.fieldset}>
        {buttons.map((data) => (
          <RadioButton
            key={data.id}
            {...data}
          />
        ))}
      </fieldset>
    </div>
  );
};
export { RadioButtons };
