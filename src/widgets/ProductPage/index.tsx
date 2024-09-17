import { Link, useNavigate, useParams } from "react-router-dom";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { ToggleProductButton } from "../../shared/ui/ToggleProductButton";
import s from "./ModalCard.module.scss";
import { useEffect } from "react";
import { products } from "../../shared/data/productData";
import { Button } from "../../shared/ui/Button/";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.filter((product) => product.id === Number(id));
  const {
    // id,
    nameRu,
    // nameEn,
    price,
    description,
    // categoryEn,
    // categoryRu,
    composition,
    weight,
    kilocalories,
    imageUrl,
  } = product[0];
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
              {composition.map((item) => (
                <li className={s.item}>{item}</li>
              ))}
            </ul>
            <p className={s.nutritional_info}>
              {weight}г, ккал {kilocalories}
            </p>
          </div>
          <Button content="добавить" variant="secondary" />
          <div className={s.inner}>
            <ToggleProductButton />
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
