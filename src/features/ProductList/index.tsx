import s from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { products } from "../../shared/data/productData";
import { useAppSelector } from "../../shared/lib/hooks/hooks";

const ProductList = () => {
  const category = useAppSelector((state) => state.selectProduct);
  const filterProduct = products.filter(
    (product) => product.categoryEn === category
  );
  const rawCategory = filterProduct[0]?.categoryRu;
  const categoryName =
    filterProduct.length === 0
      ? "Нет продукции"
      : rawCategory[0].toLocaleUpperCase() + rawCategory.slice(1);

  return (
    <section className={s.section}>
      <h2 className={s.title}>{categoryName}</h2>
      <div className={s.wrapper}>
        {filterProduct.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export { ProductList };
