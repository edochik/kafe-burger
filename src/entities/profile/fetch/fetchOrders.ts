
import { API_URL } from "@shared/api/api";
import { fetchData } from "@shared/api/helper";

const API_ORDERS = `${API_URL}orders`

export async function fetchOrders<T, K>(userId: K): Promise<T> {
	const API_QUERY_ORDERS = `${API_ORDERS}?id=${userId}`
	const response: T = await fetchData(API_QUERY_ORDERS);
	return response;
}

