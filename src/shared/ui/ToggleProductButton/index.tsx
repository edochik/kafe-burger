import {
  decrementProduct,
  incrementProduct,
} from "../../../features/Cart/cartSlice";
import { useAppDispatch } from "../../lib/hooks/hooks";
import s from "./ToggleProductButton.module.scss";
interface ToggleProductButtonProps {
  count: number;
  id: number;
}
const ToggleProductButton = (props: ToggleProductButtonProps) => {
  const { count, id } = props;
  const dispatch = useAppDispatch();

  return (
    <div className={s.toggleproductbutton}>
      <button
        className={s.minus}
        onClick={() => dispatch(decrementProduct(id))}
      >
        -
      </button>
      <button className={s.count}>{count}</button>
      <button className={s.plus} onClick={() => dispatch(incrementProduct(id))}>
        +
      </button>
    </div>
  );
};

export { ToggleProductButton };
