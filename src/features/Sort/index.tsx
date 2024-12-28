import { useRef, useState } from "react";
import s from "./Sort.module.scss";
import { useCloseHandler } from "../../shared/lib/hooks/useCloseHandler";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { setSortBy } from "../../entities/product/productSlice";

const sortOptions: Record<string, string> = {
  alphabetAsc: "алфавиту ↑",
  alphabetDesc: "алфавиту ↓",
  priceAsc: "цене ↑",
  priceDesc: "цене ↓",
  default: "умолчанию",
};

const Sort = () => {
  const [toggle, setToggle] = useState(false);
  const { sortBy } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  useCloseHandler(toggle, setToggle, ref);
  return (
    <div className={s.Sort} ref={ref}>
      <button className={s.sort_btn} onClick={() => setToggle((prev) => !prev)}>
        <p className={s.text}>Сортировка по:</p>
        <span className={s.text}>{sortOptions[sortBy]}</span>
      </button>
      {toggle && (
        <ul className={s.list}>
          {Object.entries(sortOptions).map(([key, value], index) => {
            if (sortBy === key) {
              return null;
            }
            return (
              <li key={index} className={s.item}>
                <button
                  className={s.button}
                  onClick={() => {
                    dispatch(setSortBy(key));
                    setToggle(false);
                  }}
                >
                  {value}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { Sort };
