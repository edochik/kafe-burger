type Method = "DELETE" | "PUT" | "POST" | "PATCH" | "GET"

export async function fetchRequest<T>(data: T, url: string, method: Method) {
	const response = await fetch(`https://chip-patch-papaya.glitch.me/api${url}`, {
		method: `${method}`,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...data }),
		credentials: 'include', 
	})
	if (!response.ok) {
		const error = await response.json();
		throw error;
	}
	return response.json();
}