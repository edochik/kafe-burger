import { API_URL } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";

const API_UPDATE = `${API_URL}account/update`

export async function fetchUpdateUser<T, K>(data: K): Promise<T> {
	const options: RequestInit = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...data })
	}
	const response: T = await fetchData(API_UPDATE, options);
	return response;
}
