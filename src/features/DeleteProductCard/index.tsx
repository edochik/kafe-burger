import { fetchDeleteProductThunk } from "@entities/product/thunk/fetchDeleteProductThunk";
import { Product } from "@entities/product/types";
import { useAppDispatch } from "@shared/lib/hooks/hooks";
import s from "./DeleteProductCard.module.scss";

const DeleteProductCard = (product: Product) => {
  const { id, nameRu, imageUrl } = product;
  const dispatch = useAppDispatch();
  return (
    <div className={s.DeleteProductCard}>
      <img className={s.image} src={imageUrl} alt="" />
      <p className={s.text}>{nameRu}</p>
      <button
        className={s.button}
        onClick={() => dispatch(fetchDeleteProductThunk(id))}
      >
        Удалить
      </button>
    </div>
  );
};

export { DeleteProductCard };
