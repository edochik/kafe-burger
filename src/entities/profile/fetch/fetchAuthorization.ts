import { API_URL } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";

const API_AUTHORIZATION = `${API_URL}auth/login`;

export async function fetchAuthorization<T, K>(data: K): Promise<T> {
	const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...data }),
		credentials: 'include',
	}
	const response: T = await fetchData(API_AUTHORIZATION, options);
	return response;
}
