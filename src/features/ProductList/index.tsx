import s from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import { Loader } from "./Loader";

const ProductList = () => {
  const selectProduct = useAppSelector(
    (state) => state.categories.selectCategory
  );
  const { products, loading } = useAppSelector((state) => state.products);
  const filterProduct = products.filter(
    (product) => product.categoryEn === selectProduct
  );
  if (loading === "pending") {
    return <Loader />;
  }

  const categoryRu: string = filterProduct[0]?.categoryRu;
  const categoryName: string =
    categoryRu[0].toUpperCase() + categoryRu.slice(1);

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
