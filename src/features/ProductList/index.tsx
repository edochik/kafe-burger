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
          <ProductCard key={product.id} {...product} setCart={setCart} />
        ))}
      </div>
    </section>
  );
};

export { ProductList };
