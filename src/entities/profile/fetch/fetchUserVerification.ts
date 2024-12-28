import { API } from "../../../shared/api/api";
import { fetchDataUniversal } from "../../../shared/api/helper";
import { SuccessServer, User } from "../types";


const API_VERIFICATION = `${API}auth/verify`

export async function fetchUserVerification() {
	const options: RequestInit = { method: "GET", credentials: 'include' }
	const response: SuccessServer = await fetchDataUniversal(API_VERIFICATION, options);
	return response;
}
