import { Product } from "../../shared/domain/Product";
import { Categories } from "./types";


export function getCategories(list: Product[]): Categories[] {
	const map = new Set()
	const result: Categories[] = [];
	list.forEach(item => {
		if (!map.has(item.categoryEn)) {
			map.add(item.categoryEn)
			const { id, categoryEn, categoryRu, categoryImg } = item
			result.push({ id: `${categoryEn}${String(id)}`, categoryEn, categoryRu, categoryImg })
		}
	})
	return result;
}

