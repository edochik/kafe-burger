import { API } from "../../../shared/api/api";
import { fetchDataUniversal } from "../../../shared/api/helper";
import { AuthorizationRequest, SuccessServer } from "../types";

const API_AUTHORIZATION = `${API}auth`;

export async function fetchAuthorization(data: AuthorizationRequest) {
	const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...data }),
		credentials: 'include',
	}
	const response: SuccessServer = await fetchDataUniversal(API_AUTHORIZATION, options);
	return response;
}
