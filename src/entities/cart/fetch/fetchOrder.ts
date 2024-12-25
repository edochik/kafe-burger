import { API } from "../../../shared/api/api";
import { fetchDataUniversal } from "../../../shared/api/helper";
import { SuccessServer } from "../../user/types";
import { OrderPayload } from "../types";

const API_ORDER = `${API}order`;


export async function fetchOrder(data: OrderPayload) {
	const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ ...data })
	}
	const response: SuccessServer = await fetchDataUniversal(API_ORDER, options);
	return response;
}
