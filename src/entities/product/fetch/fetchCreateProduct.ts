import { API } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";

const API_CREATE_PRODUCT = `${API}create/product`

export async function fetchCreateProduct<T, K>(product: K): Promise<T> {
	const options: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
		},
		body: JSON.stringify({ ...product })
	}
	const response: T = await fetchData(API_CREATE_PRODUCT, options);
	return response
}
