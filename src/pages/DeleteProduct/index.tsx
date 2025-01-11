import { useState } from "react";
import s from "./DeleteProduct.module.scss";
import { SelectCategory } from "../../shared/ui/SelectCategory/";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import { Category } from "../../entities/categories/types.js";

const DeleteProduct = () => {
  const [category, setCategory] = useState("");
  const { categories } = useAppSelector((state) => state.categories);
  const { products } = useAppSelector((state) => state.products);
  const categoryDictionary = Object.fromEntries(
    products.map((product) => [product.categoryEn])
  );
  console.log(categoryDictionary);
  // {burgers:[{id,nameRu},{id,nameRu}]}
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCategory(value);
  };
  console.log(category);
  return (
    <section className={s.DeleteProduct}>
      <div className={s.container}>
        <h2 className={s.title}>Удалить продукцию</h2>
        <div className={s.wrapper}>
          <SelectCategory
            list={categories}
            nameSelect="categoryEn"
            ariaLabelSelect="Категории"
            value={category}
            onChange={(e) => handleSelectChange(e)}
            textForLabel={"Категория:"}
            textForEmptyOption={"--выберите категорию--"}
            keys={["id", "categoryEn", "categoryRu"]}
            getObjectValues={(obj: Category, keys: (keyof Category)[]) =>
              keys.map((key) => obj[key])
            }
          />
          {/* <SelectCategory
            categories={[]}
            nameSelect="categoryEn"
            ariaLabelSelect="Название продукта"
            value={category}
            onChange={(e) => handleSelectChange(e)}
            textForLabel={"Имя:"}
            textForEmptyOption={"--выберите имя--"}
          /> */}
        </div>
      </div>
    </section>
  );
};

export { DeleteProduct };
