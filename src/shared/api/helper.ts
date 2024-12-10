
export async function fetchData<T>(url: string): Promise<T> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`${response.status}`)
	}
	const result: T = await response.json();
	return result
}