import s from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { products } from "../../shared/data/productData";

interface ProductListProps {
  filterCategory: string;
}
const ProductList = (props: ProductListProps) => {
  const { filterCategory } = props;
  const filterProduct = products.filter(
    (product) => product.categoryEn === filterCategory
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
          <ProductCard key={product.id} {...product}  />
        ))}
      </div>
    </section>
  );
};

export { ProductList };
