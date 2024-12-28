import { API } from "../../../shared/api/api";
import { fetchDataUniversal } from "../../../shared/api/helper";
import { SuccessServer, UpdateUser } from "../types";

const API_UPDATE = `${API}account/update`

export async function fetchUpdateUser(data: UpdateUser) {
	const options: RequestInit = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...data })
	}
	const response: SuccessServer = await fetchDataUniversal(API_UPDATE, options);
	return response;
}
