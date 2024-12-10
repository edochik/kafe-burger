import s from "./RadioButtons.module.scss";
import { RadioButton } from "../RadioButton";
import { getPartialData } from "./radiobuttons";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
// import { products } from "../../shared/data/productData";

const RadioButtons = () => {
  const products = useAppSelector((state) => state.products.products);
  const buttons = getPartialData(products);
  return (
    <div className={s.RadioButtons}>
      <fieldset className={s.fieldset}>
        {buttons.map((data) => (
          <RadioButton key={data.id} {...data} />
        ))}
      </fieldset>
    </div>
  );
};

export { RadioButtons };
