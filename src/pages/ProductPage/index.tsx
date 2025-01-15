import s from "./ProductPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { ToggleProductButton } from "../../shared/ui/ToggleProductButton";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { addProductToCart } from "../../shared/lib/utils/addProductToCart";
import { Modal } from "../../shared/ui/Modal";

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

  if (loading === "pending") {
    return (
      <div className={s.overlay} onClick={() => navigate("/")}>
        <div className={s.modal}>...Загрузка</div>
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
  const content = (
    <div className={s.Product}>
      <h2 className={s.title}>{nameRu}</h2>
      <div className={s.box}>
        <img className={s.image} src={imageUrl} alt={`фотография ${nameRu}`} />
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
        <button
          className={s.button}
          onClick={() => addProductToCart(dispatch, cart, product[0])}
        >
          Добавить
        </button>
        <div className={s.inner}>
          {count && (
            <ToggleProductButton count={count} id={Number(productId)} />
          )}
          <p className={s.price}>{price}₽</p>
        </div>
      </div>
    </div>
  );
  return <Modal leftComponent={content} rightComponent={null} />;
};

export { ProductPage };
