import { IResponseServer } from "../domain/responseServer";

export async function fetchDataUniversal<T>(url: string, options?: Partial<RequestInit>): Promise<T> {
	const response = await fetch(url, options);
	if (!response.ok) {
		const error: IResponseServer = await response.json();
		throw error;
	}
	return await response.json();
}
