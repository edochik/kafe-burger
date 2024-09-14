import s from "./ToggleProductButton.module.scss";
interface ToggleProductButtonProps {
  count?: number;
}
const ToggleProductButton = ({ count }: ToggleProductButtonProps) => {
  return (
    <div className={s.toggleproductbutton}>
      <button className={s.minus}>-</button>
      <p className={s.count}>{count}</p>
      <button className={s.plus}>+</button>
    </div>
  );
};

export { ToggleProductButton };
