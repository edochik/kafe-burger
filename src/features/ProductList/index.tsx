import s from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { products } from "./productlist";
interface ProductListProps {
  filterCategory: string;
}
const ProductList: React.FC<ProductListProps> = ({ filterCategory }) => {
  const filterProduct = products.filter(
    (product) => product.categoryEn === filterCategory
  );
  const rawNameProduct = filterProduct[0]?.categoryRu;
  const nameProduct =
    rawNameProduct === undefined
      ? "Нет продукции"
      : rawNameProduct[0].toLocaleUpperCase() + rawNameProduct.slice(1);
  return (
    <section className={s.section}>
      <h2 className={s.title}>{nameProduct}</h2>
      <div className={s.wrapper}>
        {filterProduct.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </section>
  );
};

export { ProductList };
