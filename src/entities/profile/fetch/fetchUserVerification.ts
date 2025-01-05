import { API } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";
import { SuccessServer } from "../types";


const API_VERIFICATION = `${API}auth/verify`

export async function fetchUserVerification() {
	const options: RequestInit = { method: "GET", credentials: 'include' }
	const response: SuccessServer = await fetchData(API_VERIFICATION, options);
	return response;
}
