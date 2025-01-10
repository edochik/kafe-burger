import s from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { Loader } from "./Loader";
import { Pagination } from "../Pagination/";
import {
  decrementPage,
  incrementPage,
} from "../../entities/product/productSlice";

const ProductList = () => {
  const { selectCategory } = useAppSelector((state) => state.categories);
  const { products, loading, pageInfo } = useAppSelector(
    (state) => state.products
  );
  const { pageSize, currentPage } = pageInfo;
  const filterProduct = products.filter(
    (product) => product.categoryEn === selectCategory
  );
  const lastPage = Math.ceil(filterProduct.length / pageSize);

  const dispatch = useAppDispatch();
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
        {filterProduct
          .slice((currentPage - 1) * pageSize, pageSize * currentPage)
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </ul>
      {filterProduct.length > 6 && (
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          onClickNextPage={() => dispatch(incrementPage())}
          onClickPrevPage={() => dispatch(decrementPage())}
        />
      )}
    </section>
  );
};

export { ProductList };
