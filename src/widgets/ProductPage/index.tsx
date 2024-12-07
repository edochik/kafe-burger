import s from "./ProductPage.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { ToggleProductButton } from "../../shared/ui/ToggleProductButton";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import {
  addProductCart,
  incrementProduct,
} from "../../features/Cart/cartSlice";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const count = useAppSelector((state) => state.productsInCart).filter(
    (product) => product.id === Number(productId)
  )[0]?.count;

  const productsInCart = useAppSelector((state) => state.productsInCart);

  const product = products.filter(
    (product) => product.id === Number(productId)
  );

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

  const onClickAppProduct = (id: number) => {
    if (!productsInCart.some((product) => product.id === id)) {
      dispatch(
        addProductCart({ id, nameRu, price, weight, imageUrl, count: 1 })
      );
    } else {
      dispatch(incrementProduct(id));
    }
  };

  useEffect(() => {
    const handleCloseProductPage = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigate("/");
      }
    };
    document.addEventListener("keydown", handleCloseProductPage);
    return () => {
      document.removeEventListener("keydown", handleCloseProductPage);
    };
  }, [navigate]);
  const handleCloseProductPage = () => {
    navigate("/");
  };
  return (
    <div className={s.overlay} onClick={handleCloseProductPage}>
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
          <button className={s.button} onClick={() => onClickAppProduct(id)}>
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
