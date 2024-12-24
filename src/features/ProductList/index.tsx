import s from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { useAppSelector } from "../../shared/lib/hooks/hooks";

const ProductList = () => {
  const category = useAppSelector((state) => state.selectProduct);
  const products = useAppSelector((state) => state.products.products);
  const profile = useAppSelector((state) => state.profile);
  console.log(profile);
  const filterProduct = products.filter(
    (product) => product.categoryEn === category
  );

  if (filterProduct.length === 0) {
    return <div className={s.loader}></div>;
  }

  const categoryRu = filterProduct[0]?.categoryRu;
  const categoryName = categoryRu[0].toUpperCase() + categoryRu.slice(1);

  return (
    <section className={s.section}>
      <h2 className={s.title}>{categoryName}</h2>
      <ul className={s.list}>
        {filterProduct.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export { ProductList };
