import { API } from "../../../shared/api/api";
import { fetchDataUniversal } from "../../../shared/api/helper";
import { User } from "../types";


const API_VERIFICATION = `${API}auth/verify`

export async function fetchUserVerification(): Promise<User> {
	const options: RequestInit = { method: "GET", credentials: 'include' }
	const response: User = await fetchDataUniversal(API_VERIFICATION, options);
	return response;
}
