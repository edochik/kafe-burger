import { API_URL } from "@shared/api/api";
import { fetchData } from "@shared/api/helper";

const API_ORDER = `${API_URL}orders`;


export async function fetchOrder<T, K>(data: K): Promise<T> {
	const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ ...data })
	}
	const response: T = await fetchData(API_ORDER, options);
	return response;
}
