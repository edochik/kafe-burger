import { AppDispatch } from "../../app/store";
import { Category } from "../../entities/categories/types";
import { updateCategoryProduct } from "../../entities/product/productSlice";

export const selectCategory = (
	value: string,
	dispatch: AppDispatch,
	categories: Category[]
) => {
	if (value === "") {
		dispatch(
			updateCategoryProduct({
				categoryEn: "",
				categoryImg: "",
				categoryRu: "",
			})
		);
		return;
	}
	const dictionaryCategories = Object.fromEntries(
		categories.map((category) => [category.id, category])
	);
	const { categoryEn, categoryImg, categoryRu } = dictionaryCategories[value];
	dispatch(updateCategoryProduct({ categoryEn, categoryImg, categoryRu }));
}
