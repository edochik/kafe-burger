export function handleInvalidInput(e: React.ChangeEvent<HTMLInputElement>, answer: string) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		e.target.setCustomValidity(answer);
	}
}