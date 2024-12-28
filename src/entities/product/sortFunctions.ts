import { Product } from "../../shared/domain/Product.js";

export const sortFunctions: Record<string, (products: Product[]) => Product[]> = {
	alphabetAsc: (products) => products.sort((a, b) => a.nameRu.localeCompare(b.nameRu)),
	alphabetDesc: (products) => products.sort((a, b) => b.nameRu.localeCompare(a.nameRu)),
	priceAsc: (products) => products.sort((a, b) => a.price - b.price),
	priceDesc: (products) => products.sort((a, b) => b.price - a.price),
};
