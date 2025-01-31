import { API_URL } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";

const API_VERIFICATION = `${API_URL}auth/verify`

export async function fetchUserVerification<T>(): Promise<T> {
	const options: RequestInit = { method: "GET", credentials: 'include' }
	const response: T = await fetchData(API_VERIFICATION, options);
	return response;
}
