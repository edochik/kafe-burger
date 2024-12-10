interface Data {
	login: string,
	password: string
}

export async function fetchAuthorization(data: Data) {
	const response = await fetch('https://chip-patch-papaya.glitch.me/api/auth', {
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