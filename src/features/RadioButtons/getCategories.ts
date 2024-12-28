import { Product } from "../../shared/domain/Product";


export interface Categories {
	id: string,
	categoryEn: string,
	categoryRu: string,
	categoryImg: string
}

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

