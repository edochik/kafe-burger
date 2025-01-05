import { useEffect, useState } from "react";
import s from "./CreateProduct.module.scss";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import { customInvalidMessage } from "../../shared/lib/utils/customInvalidMessage";
import { Link } from "react-router-dom";
import { createProductFields } from "./createProductFields";
import { FormInput } from "../../shared/ui/FormInput/";

interface FormValues {
  nameRu: string;
  nameEn: string;
  price: string | number;
  weight: string | number;
  kilocalories: string | number;
  imageUrl: string;
  composition: string;
  categoryImg: string;
  description: string;
  categoryEn: string;
  categoryRu: string;
}

const CreateProduct = () => {
  const [formValues, setFormValues] = useState({
    nameRu: "",
    nameEn: "",
    price: "",
    weight: "",
    kilocalories: "",
    imageUrl: "",
    composition: "",
    categoryImg: "",
    description: "",
    categoryEn: "",
    categoryRu: "",
  });
  const [clientError, setClientError] = useState<null | string>(null);
  useEffect(() => setClientError(null), [formValues]);
  const { categories } = useAppSelector((state) => state.categories);
  const dictionaryCategories = Object.fromEntries(
    categories.map((category) => [category.categoryEn, category])
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    // проверка по русски, по английски, цифры, текст с разделением
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === "empty") {
      setFormValues((prev) => ({
        ...prev,
        categoryEn: "",
        categoryImg: "",
        categoryRu: "",
      }));
      return;
    }
    const { categoryEn, categoryImg, categoryRu } = dictionaryCategories[value];
    setFormValues((prev) => ({ ...prev, categoryEn, categoryImg, categoryRu }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClientError(null);
    if (Object.values(formValues).some((value) => value.length === 0)) {
      setClientError("Все поля должны быть заполнены");
      return;
    }
  };
  return (
    <section className={s.CreateProduct}>
      <div className={s.container}>
        <h2 className={s.title}>Создать новый продукт</h2>
        <form className={s.form} onSubmit={handleSubmit}>
          {createProductFields.map((element) => {
            const { name, ...spread } = element;
            const value = formValues[name as keyof FormValues];
            return (
              <FormInput
                classInput={s.input}
                classLabel={s.label}
                name={name}
                value={value}
                onChange={(e) => handleInputChange(e)}
                {...spread}
              />
            );
          })}
          <label className={s.label}>
            Описание:
            <textarea
              className={s.textarea}
              name="description"
              value={formValues.description}
              aria-label="Описание"
              required
              onChange={(e) => {
                const { value, name } = e.target;
                setFormValues((prev) => ({ ...prev, [name]: value }));
              }}
            />
          </label>
          <label className={s.label}>
            Категория:
            <select
              name="categoryEn"
              value={formValues.categoryEn}
              aria-label="Категории"
              onChange={(e) => handleSelectChange(e)}
            >
              <option value="empty">--выбери категорию--</option>
              {categories.map((category, index) => {
                const { categoryEn, categoryRu } = category;
                return (
                  <option key={category.id} value={category.categoryEn}>
                    {categoryRu}
                  </option>
                );
              })}
            </select>
          </label>
          {clientError && <div className={s.error}>{clientError}</div>}
          <button className={s.button} type="submit">
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
