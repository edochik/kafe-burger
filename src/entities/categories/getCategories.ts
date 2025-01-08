import { Product } from "../product/types";
import { Category } from "./types";


export function getCategories(list: Product[]): Category[] {
	const map = new Set()
	const result: Category[] = [];
	list.forEach(item => {
		if (!map.has(item.categoryEn)) {
			map.add(item.categoryEn)
			const { id, categoryEn, categoryRu, categoryImg } = item
			result.push({ id: `${categoryEn}${String(id)}`, categoryEn, categoryRu, categoryImg })
		}
	})
	return result;
}

