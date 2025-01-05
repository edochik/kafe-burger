import { API } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";
import { AuthorizationRequest, SuccessServer } from "../types";
//https://chip-patch-papaya.glitch.me/api/auth/login

const API_AUTHORIZATION = `${API}auth/login`;

export async function fetchAuthorization(data: AuthorizationRequest) {
	const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...data }),
		credentials: 'include',
	}
	const response: SuccessServer = await fetchData(API_AUTHORIZATION, options);
	return response;
}
