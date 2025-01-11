import { Category } from "../../../entities/categories/types";
import s from "./SelectCategory.module.scss";

interface SelectCategoryProps {
  list: Category[];
  nameSelect: string;
  ariaLabelSelect: string;
  value: string;
  textForEmptyOption: string;
  textForLabel: string;
  keys: (keyof Category)[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  getObjectValues: (object: Category, args: (keyof Category)[]) => string[];
}

const SelectCategory = ({
  list,
  nameSelect,
  ariaLabelSelect,
  value,
  textForEmptyOption,
  textForLabel,
  keys,
  onChange,
  getObjectValues,
}: SelectCategoryProps) => {
  return (
    <label className={s.SelectCategory}>
      {textForLabel}
      <select
        name={nameSelect}
        value={value}
        aria-label={ariaLabelSelect}
        onChange={(e) => onChange(e)}
      >
        <option value="empty">{textForEmptyOption}</option>
        {list.map((item) => {
          const [id, optionValue, contentValue] = getObjectValues(item, keys);
          return (
            <option key={id} value={optionValue}>
              {contentValue}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export { SelectCategory };
