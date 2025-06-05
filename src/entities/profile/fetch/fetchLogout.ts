import { API_URL } from "@shared/api/api";
import { fetchData } from "@shared/api/helper";

const API_LOGOUT = `${API_URL}auth/logout`

export async function fetchLogout<T>(): Promise<T> {
	const options: RequestInit = {
		method: "POST",
		credentials: "include"
	}
	const response: T = await fetchData(API_LOGOUT, options);
	return response
}

