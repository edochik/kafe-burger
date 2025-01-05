import { API } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";
import { SuccessServer, UpdateUser } from "../types";
const API_REGISTRATION = `${API}auth/register`

export async function fetchRegistration(data: Partial<UpdateUser>) {
	const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...data })
	}
	const response: SuccessServer = await fetchData(API_REGISTRATION, options);
	return response
}
