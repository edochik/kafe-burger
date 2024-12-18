export async function fetchRequest<T>(data: T, url: string) {
	const response = await fetch(`'https://chip-patch-papaya.glitch.me/'${url}`, {
		method: "POST",
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