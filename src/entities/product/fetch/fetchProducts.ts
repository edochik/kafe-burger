import { API } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";

const API_PRODUCTS = `${API}products`

export async function fetchProducts<T>(): Promise<T> {
	const products = await fetchData<T>(API_PRODUCTS);
	return products
}