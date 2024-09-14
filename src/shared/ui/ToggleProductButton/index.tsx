import s from "./ToggleProductButton.module.scss";

const ToggleProductButton = () => {
  return (
    <div className={s.toggleproductbutton}>
      <button className={s.minus}>-</button>
      <p className={s.count}>1</p>
      <button className={s.plus}>+</button>
    </div>
  );
};

export { ToggleProductButton };
