import { API } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";

const API_REGISTRATION = `${API}auth/register`

export async function fetchRegistration<T, K>(data: K): Promise<T> {
	const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...data })
	}
	const response: T = await fetchData(API_REGISTRATION, options);
	return response
}
