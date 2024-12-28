import { API } from "../../../shared/api/api";
import { fetchDataUniversal } from "../../../shared/api/helper";
import { SuccessServer, UpdateUser } from "../types";

const API_REGISTRATION = `${API}register`

export async function fetchRegistration(data: Partial<UpdateUser>) {
	const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...data })
	}
	const response: SuccessServer = await fetchDataUniversal(API_REGISTRATION, options);
	return response
}
