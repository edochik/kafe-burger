import { API } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";
import { SuccessServer } from "../types";

const API_LOGOUT = `${API}auth/logout`


export async function fetchLogout() {
	const options: RequestInit = {
		method: "POST",
		credentials: "include"
	}
	const response: SuccessServer = await fetchData(API_LOGOUT, options);
	return response
}

