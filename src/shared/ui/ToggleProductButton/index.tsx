import s from "./ToggleProductButton.module.scss";
interface ToggleProductButtonProps {
  count?: number;
}
const ToggleProductButton = ({ count }: ToggleProductButtonProps) => {
  return (
    <div className={s.toggleproductbutton}>
      <button className={s.minus}>-</button>
      <button className={s.count}>{count}</button>
      <button className={s.plus}>+</button>
    </div>
  );
};

export { ToggleProductButton };
