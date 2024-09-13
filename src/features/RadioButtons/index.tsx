import s from "./radiobuttons.module.scss";
import { RadioButton } from "../../components/RadioButton/";
import { radioButtonData } from "./radiobuttons";
import { useState } from "react";

const RadioButtons = () => {
  const [isChecked, setIsChecked] = useState(radioButtonData[0].nameEn);
  return (
    <div className={s.radiobuttons}>
      <fieldset className={s.fieldset}>
        {radioButtonData.map((data, index) => (
          <RadioButton
            key={data.id}
            {...data}
            value={isChecked}
            onChange={setIsChecked}
          />
        ))}
      </fieldset>
    </div>
  );
};
export { RadioButtons };
