import { IResponseServer } from "../types/IResponseServer";

export async function fetchData<T, K = IResponseServer>(url: string, options?: RequestInit): Promise<T> {
	const response = await fetch(url, options);
	if (!response.ok) {
		const error: K = await response.json();
		throw error;
	}
	return await response.json();
}


