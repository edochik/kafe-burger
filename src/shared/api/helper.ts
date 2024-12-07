
export async function fetchData(url: string) {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`${response.status}`)
	}
	const result = await response.json();
	return result
}