import s from "./CustomSelect.module.scss";

interface CustomSelectProps<T, K> {
  list: T[];
  nameSelect: string;
  ariaLabelSelect: string;
  value: string | number | undefined;
  textForEmptyOption: string;
  textForLabel: string;
  keys: (keyof T)[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  getValues: (element: T, args: (keyof T)[]) => K[];
}

const CustomSelect = <T extends object, K extends string | number>({
  list,
  nameSelect,
  ariaLabelSelect,
  value,
  textForEmptyOption,
  textForLabel,
  keys,
  onChange,
  getValues: getObjectValues,
}: CustomSelectProps<T, K>) => {
  return (
    <label className={s.CustomSelect}>
      {textForLabel}
      <select
        name={nameSelect}
        value={value}
        aria-label={ariaLabelSelect}
        onChange={(e) => onChange(e)}
      >
        <option value="">{textForEmptyOption}</option>
        {list.map((item) => {
          const [id, contentValue] = getObjectValues(item, keys);
          return (
            <option key={id} value={id}>
              {contentValue}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export { CustomSelect };
