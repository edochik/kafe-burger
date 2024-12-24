


export async function fetchData<T>(url: string): Promise<T> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`${response.status}`)
	}
	return await response.json();
}

export async function fetchDataUniversal<T>(url: string, options?: Partial<RequestInit>): Promise<T> {
	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error(`${response.status}`)
	}
	return await response.json();
}
