import { API } from "../../../shared/api/api";
import { fetchDataUniversal } from "../../../shared/api/helper";

const API_LOGOUT = `${API}logout`


export async function fetchLogout() {
	const options: RequestInit = {
		method: "POST",
		credentials: "include"
	}
	const response = await fetchDataUniversal(API_LOGOUT, options);
}