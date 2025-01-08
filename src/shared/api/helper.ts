import { ResponseServer } from "../types/responseServer";

export async function fetchData<T>(url: string, options?: Partial<RequestInit>): Promise<T> {
	const response = await fetch(url, options);
	if (!response.ok) {
		const error: ResponseServer = await response.json();
		throw error;
	}
	return await response.json();
}
