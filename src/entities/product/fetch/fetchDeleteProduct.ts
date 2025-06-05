import { API_PRODUCT } from "@shared/api/api";
import { fetchData } from "@shared/api/helper";

export async function fetchDeleteProduct<T, K>(productId: K): Promise<T> {
	const API_QUERY_DELETE_PRODUCT = `${API_PRODUCT}?id=${productId}`
	const options = { method: 'DELETE' }
	const response: T = await fetchData(API_QUERY_DELETE_PRODUCT, options);
	return response
}
