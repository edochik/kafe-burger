import s from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import { LoaderSection } from "./LoaderSection";

const ProductList = () => {
  const category = useAppSelector((state) => state.selectProduct);
  const { products, loading } = useAppSelector((state) => state.products);
  const filterProduct = products.filter(
    (product) => product.categoryEn === category
  );
  if (loading === "pending") {
    return <LoaderSection />;
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
