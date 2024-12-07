import { Product } from "../../shared/domain/Product.js";


export interface PartialData {
	id: string, // сделал стрингой так как наврятли смогу использовать сервер Https  или Crypto.randomUUID()
	categoryEn: string,
	categoryRu: string,
	categoryImg: string
}

export function getPartialData(list: Product[]) {
	const map = new Set()
	const result: PartialData[] = [];
	list.forEach(item => {
		if (!map.has(item.categoryEn)) {
			map.add(item.categoryEn)
			const { id, categoryEn, categoryRu, categoryImg } = item
			result.push({ id: `${categoryEn}${String(id)}`, categoryEn, categoryRu, categoryImg })
		}
	})
	return result;
}

