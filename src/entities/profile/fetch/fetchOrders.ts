
import { API } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";
import { SuccessServer } from "../types";

const API_ORDERS = `${API}orders`

export async function fetchOrders(userId: number) {
	const API_QUERY_ORDERS = `${API_ORDERS}?id=${userId}`
	const response: SuccessServer = await fetchData(API_QUERY_ORDERS);
	return response;
}
