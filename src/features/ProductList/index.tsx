import s from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { products } from "./productlist";
const ProductList = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>Бургеры</h2>
      <div className={s.wrapper}>
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </section>
  );
};

export { ProductList };
