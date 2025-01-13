import { API_PRODUCT } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";
export async function fetchCreateProduct<T, K>(product: K): Promise<T> {
	const options: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
		},
		body: JSON.stringify({ ...product })
	}
	const response: T = await fetchData(API_PRODUCT, options);
	return response
}
