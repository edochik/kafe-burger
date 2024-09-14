import s from "./RadioButtons.module.scss";
import { RadioButton } from "../RadioButton";
import { radioButtonData } from "./radiobuttons";
interface RadioButtonsProps {
  setFilterCategory: (value: string) => void;
  filterCategory: string;
}
const RadioButtons: React.FC<RadioButtonsProps> = (props) => {
  const { setFilterCategory, filterCategory } = props;
  return (
    <div className={s.radiobuttons}>
      <fieldset className={s.fieldset}>
        {radioButtonData.map((data, index) => (
          <RadioButton
            key={data.id}
            {...data}
            value={filterCategory}
            onChange={setFilterCategory}
          />
        ))}
      </fieldset>
    </div>
  );
};
export { RadioButtons };
