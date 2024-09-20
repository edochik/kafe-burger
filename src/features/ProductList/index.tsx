import s from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { CartItem } from "../../app/interface";
import { products } from "../../shared/data/productData";

interface ProductListProps {
  setCart: (updateFunction: (prev: CartItem[]) => CartItem[]) => void;
  filterCategory: string;
}
const ProductList = (props: ProductListProps) => {
  const { filterCategory, setCart } = props;
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
          <ProductCard key={product.id} {...product} setCart={setCart} />
        ))}
      </div>
    </section>
  );
};

export { ProductList };
