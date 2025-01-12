import { useEffect, useState } from "react";
import s from "./CreateProduct.module.scss";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/hooks";
import { Link, useLocation } from "react-router-dom";
import { createProductFields } from "./createProductFields";
import { FormInput } from "../../shared/ui/FormInput/";
import {
  resetNewProduct,
  resetServerResponseProduct,
  updateProduct,
} from "../../entities/product/productSlice";
import { Product } from "../../entities/product/types";
import { fetchCreateProductThunk } from "../../entities/product/thunk/fetchCreateProductThunk";
import { numberInput } from "./numberInput";
import { selectCategory } from "./selectCategory";
import { ResponseServer } from "../../shared/ui/ResponseServer/";
import { CustomSelect } from "../../shared/ui/CustomSelect";

const CreateProduct = () => {
  const {
    newProduct,
    loading,
    errorServer: error,
    successServer: success,
  } = useAppSelector((state) => state.products);
  const { categories } = useAppSelector((state) => state.categories);
  const [clientError, setClientError] = useState<null | string>(null);
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useAppDispatch();
  const idCategory = categories.find(
    (category) => category.categoryEn === newProduct.categoryEn
  )?.id;
  useEffect(() => {
    const handleKeyPress = () => {
      dispatch(resetServerResponseProduct());
    };
    if (success !== null) {
      dispatch(resetNewProduct());
    }
    if (clientError !== null) {
      setClientError(null);
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [newProduct, success]);

  useEffect(() => {
    dispatch(resetServerResponseProduct());
  }, [currentPath, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === "price" || name === "weight" || name === "kilocalories") {
      numberInput(name, value, dispatch);
    } else {
      dispatch(
        updateProduct({ key: name as keyof Omit<Product, "id">, value })
      );
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    selectCategory(value, dispatch, categories);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    if (!/^[а-яёА-ЯЁ ]*$/.test(value)) {
      return;
    }
    dispatch(
      updateProduct({
        key: name as keyof Omit<Product, "id">,
        value,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClientError(null);
    if (Object.values(newProduct).some((value) => String(value).length === 0)) {
      setClientError("Все поля должны быть заполнены");
      return;
    }
    if (Object.values(newProduct).some((value) => value === 0)) {
      setClientError("Стоимость, вес или калорий не может быть равно 0");
      return;
    }
    dispatch(fetchCreateProductThunk(newProduct));
  };

  return (
    <section className={s.CreateProduct}>
      <div className={s.container}>
        <h2 className={s.title}>Создать новый продукт</h2>
        <div className={s.tut}></div>
        <form className={s.form} onSubmit={handleSubmit}>
          {createProductFields.map((field, index) => {
            const { name, ...spread } = field;
            const value = newProduct[name as keyof Omit<Product, "id">];
            return (
              <FormInput
                key={name}
                classLabel={`${s[name]}`}
                name={name}
                value={value}
                onChange={(e) => handleInputChange(e)}
                {...spread}
              />
            );
          })}
          <label className={s.textarea}>
            Описание ru:
            <textarea
              name="description"
              value={newProduct.description}
              aria-label="Описание продукта"
              required
              onChange={(e) => handleTextareaChange(e)}
            />
          </label>
          <CustomSelect
            list={categories}
            nameSelect="categoryEn"
            ariaLabelSelect="Категории"
            value={idCategory}
            onChange={(e) => handleSelectChange(e)}
            textForLabel={"Категория:"}
            textForEmptyOption={"--выберите категорию--"}
            keys={["id", "categoryRu"]}
            getValues={(obj, keys) => keys.map((key) => obj[key])}
          />
          {clientError && <div className={s.client_error}>{clientError}</div>}
          {error && (
            <div className={s.error}>
              <ResponseServer {...error} />
            </div>
          )}
          {success && (
            <div className={s.success}>
              <ResponseServer {...success} />
            </div>
          )}
          <button
            className={s.button}
            type="submit"
            disabled={loading === "pending"}
          >
            Отправить
          </button>
        </form>
        <Link className={s.go_back} to="/">
          🏃‍♂️ Вернуться обратно
        </Link>
      </div>
    </section>
  );
};

export { CreateProduct };
