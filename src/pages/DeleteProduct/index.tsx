import { useEffect, useRef, useState } from "react";
import s from "./DeleteProduct.module.scss";
import { CustomSelect } from "../../shared/ui/CustomSelect";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import { DeleteProductCard } from "../../features/DeleteProductCard/";
import { Link } from "react-router-dom";

const DeleteProduct = () => {
  const [categoryId, setCategoryId] = useState("");
  const [categoryNameEn, setCategoryNameEn] = useState("");
  const [idDeleteProduct, setIdDeleteProduct] = useState("");
  const prevCategoryId = useRef("");

  useEffect(() => {
    if (categoryId === "" || prevCategoryId.current !== categoryId) {
      setIdDeleteProduct("");
    }
  }, [categoryId]);

  const { categories } = useAppSelector((state) => state.categories);
  const { products } = useAppSelector((state) => state.products);
  const getProductByCategory = products
    .filter((product) => product.categoryEn === categoryNameEn)
    .map((product) => {
      const { id, nameEn, nameRu } = product;
      return { id, nameEn, nameRu };
    });

  const product = products.find(
    (product) => product.id === Number(idDeleteProduct)
  );

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const categoryEn =
      categories.find((item) => item.id === value)?.categoryEn ?? "";
    setCategoryId(value);
    setCategoryNameEn(categoryEn);
  };
  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setIdDeleteProduct(value);
  };

  return (
    <section className={s.DeleteProduct}>
      <h2 className={s.title}>Удалить продукцию</h2>
      <CustomSelect
        list={categories}
        nameSelect="categories"
        ariaLabelSelect="Категории"
        value={categoryId}
        onChange={(e) => handleCategoryChange(e)}
        textForLabel={"Категория:"}
        textForEmptyOption={"--выберите категорию--"}
        keys={["id", "categoryRu"]}
        getValues={(obj, keys) => keys.map((key) => obj[key])}
      />
      <CustomSelect
        list={getProductByCategory}
        nameSelect="products"
        ariaLabelSelect="Продукция"
        value={idDeleteProduct}
        onChange={(e) => handleProductChange(e)}
        textForLabel={"Название:"}
        textForEmptyOption={
          categoryId === "" || categoryId === "empty"
            ? "--выберите категорию--"
            : "--выберите продукцию--"
        }
        keys={["id", "nameRu"]}
        getValues={(obj, keys) => keys.map((key) => obj[key])}
      />
      {product === undefined ? (
        <div className={s.empty_card}>
          <p>выберите категорию</p>
        </div>
      ) : (
        <DeleteProductCard {...product} />
      )}
      <Link className={s.go_back} to="/">
        🏃‍♂️ Вернуться обратно
      </Link>
    </section>
  );
};

export { DeleteProduct };
