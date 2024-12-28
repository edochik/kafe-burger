import { Product } from "../../shared/domain/Product.js";


export interface CategoryProducts {
	id: string,
	categoryEn: string,
	categoryRu: string,
	categoryImg: string
}

export function getCategoryProducts(list: Product[]) {
	const map = new Set()
	const result: CategoryProducts[] = [];
	list.forEach(item => {
		if (!map.has(item.categoryEn)) {
			map.add(item.categoryEn)
			const { id, categoryEn, categoryRu, categoryImg } = item
			result.push({ id: `${categoryEn}${String(id)}`, categoryEn, categoryRu, categoryImg })
		}
	})
	return result;
}

