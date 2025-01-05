import { API } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";
import { SuccessServer } from "../../profile/types";
import { OrderPayload } from "../types";

const API_ORDER = `${API}orders`;


export async function fetchOrder(data: OrderPayload) {
	const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ ...data })
	}
	const response: SuccessServer = await fetchData(API_ORDER, options);
	return response;
}
