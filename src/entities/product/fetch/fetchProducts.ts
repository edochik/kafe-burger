import { API } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";
import { Product } from "../types.js";

const API_PRODUCTS = `${API}products`

export async function fetchProducts(): Promise<Product[]> {
	const products = await fetchData<Product[]>(API_PRODUCTS);
	return products
}