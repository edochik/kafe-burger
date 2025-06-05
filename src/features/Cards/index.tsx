import s from "./Cards.module.scss";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks/hooks";
import { Loader } from "./Loader";
import { Pagination } from "../Pagination";
import {
  decrementPage,
  incrementPage,
} from "@entities/product/productSlice";
import { Card } from "../Card";
import { useEffect } from "react";

const Cards = () => {
  const { selectCategory } = useAppSelector((state) => state.categories);
  const { products, loading, pageInfo } = useAppSelector(
    (state) => state.products
  );

  const { pageSize, currentPage } = pageInfo;
  const filterProduct = products.filter(
    (product) => product.categoryEn === selectCategory
  );
  const lastPage = Math.ceil(filterProduct.length / pageSize);
  useEffect(() => {
    if (lastPage < currentPage) {
    }
  }, [lastPage, currentPage]);

  const dispatch = useAppDispatch();
  if (loading === "pending") {
    return <Loader />;
  }
  if (loading === "failed") {
    return (
      <section className={s.Cards}>
        <div className={s.title}>Ошибка</div>
      </section>
    );
  }
  const categoryRu: string = filterProduct[0]?.categoryRu;
  const categoryName: string =
    categoryRu[0].toUpperCase() + categoryRu.slice(1);

  return (
    <section className={s.Cards}>
      <h2 className={s.title}>{categoryName}</h2>
      <ul className={s.list}>
        {filterProduct
          .slice((currentPage - 1) * pageSize, pageSize * currentPage)
          .map((product) => (
            <Card key={product.id} {...product} />
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

export { Cards as ProductList };
