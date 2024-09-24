import { Product } from "../../shared/data/productData";
export interface ButtonProps {
	id: string,
	categoryEn: string,
	categoryRu: string,
	categoryImg: string
}

export function getButtonsData(list: Product[]) {
	const dictionary: Record<string, boolean> = {};
	const result: ButtonProps[] = [];
	list.forEach(item => {
		if (!dictionary[item.categoryEn]) {
			const { id, categoryEn, categoryRu, categoryImg } = item
			result.push({ id: `${categoryEn}${String(id)}`, categoryEn, categoryRu, categoryImg })
			dictionary[item.categoryEn] = true
		}
	})
	return result;
}