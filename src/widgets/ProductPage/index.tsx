import s from "./ProductPage.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { ToggleProductButton } from "../../shared/ui/ToggleProductButton";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import {
  addProductCart,
  incrementProduct,
} from "../../entities/cart/cartSlice";
import { useEscapeHandler } from "../../shared/hooks/useEscapeHandler";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.products.loading);
  const product = useAppSelector((state) => state.products.products).filter(
    (product) => product.id === Number(productId)
  );
  const count = useAppSelector((state) => state.cart.cart).find(
    (product) => product.id === Number(productId)
  )?.count;
  const { cart } = useAppSelector((state) => state.cart);
  useEscapeHandler();

  if (loading === "pending") {
    return (
      <div className={s.overlay} onClick={() => navigate("/")}>
        <div className={s.modal}>
          <div className={s.loader}></div>
        </div>
      </div>
    );
  }

  const {
    id,
    nameRu,
    price,
    description,
    composition,
    weight,
    kilocalories,
    imageUrl,
  } = product[0];

  const onClickAddProduct = (id: number) => {
    if (!cart.some((product) => product.id === id)) {
      dispatch(
        addProductCart({ id, nameRu, price, weight, imageUrl, count: 1 })
      );
    } else {
      dispatch(incrementProduct(id));
    }
  };

  return (
    <div className={s.overlay} onClick={() => navigate("/")}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={s.title}>{nameRu}</h2>
        <div className={s.box}>
          <img
            className={s.image}
            src={imageUrl}
            alt={`фотография ${nameRu}`}
          />
          <div className={s.info}>
            <p className={s.description}>{description}</p>
            <p className={s.composition}>Состав:</p>
            <ul className={s.list}>
              {composition.split("|").map((item, index) => (
                <li key={index} className={s.item}>
                  {item}
                </li>
              ))}
            </ul>
            <p className={s.nutritional_info}>
              {weight}г, ккал {kilocalories}
            </p>
          </div>
          <button className={s.button} onClick={() => onClickAddProduct(id)}>
            Добавить
          </button>
          <div className={s.inner}>
            {count && (
              <ToggleProductButton count={count} id={Number(productId)} />
            )}
            <p className={s.price}>{price}₽</p>
          </div>
        </div>
        <Link to="/" className={s.close}>
          <CloseIcon />
        </Link>
      </div>
    </div>
  );
};

export { ProductPage };
