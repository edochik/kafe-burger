import { Product } from "../product/types";
import { Category } from "./types";


export function getCategories(list: Product[]): Category[] {
	const map = new Set()
	const result: Category[] = [];
	list.forEach(item => {
		if (!map.has(item.categoryEn)) {
			map.add(item.categoryEn)
			const { categoryEn, categoryRu, categoryImg } = item
			result.push({ id: crypto.randomUUID().slice(1, 8), categoryEn, categoryRu, categoryImg })
		}
	})
	return result;
}

