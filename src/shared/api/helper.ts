
export async function fetchData<T>(url: string): Promise<T> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`${response.status}`)
	}
	return await response.json();
}


// export async function fetchData<T extends string>(url: string): Promise<{ [key in T]: Dataset }> {
// 	const response = await fetch(url);
// 	if (!response.ok) {
// 		throw new Error(`${response.status}`)
// 	}
// 	return await response.json();
// }
