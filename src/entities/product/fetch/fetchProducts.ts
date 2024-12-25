import { Product } from "../../../shared/domain/Product";
import { API } from "../../../shared/api/api";
import { fetchDataUniversal } from "../../../shared/api/helper";

const API_PRODUCTS = `${API}products`

export async function fetchProducts(): Promise<Product[]> {
	const products = await fetchDataUniversal<Product[]>(API_PRODUCTS);
	return products
}