import { API } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";
import { Product, ProductSuccessServer } from "../types";

const API_CREATE_PRODUCT = `${API}create/product`

export async function fetchCreateProduct(product: Omit<Product, "id">) {
	const options: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
		},
		body: JSON.stringify({ ...product })
	}
	const response: ProductSuccessServer = await fetchData(API_CREATE_PRODUCT, options);
	return response
}
