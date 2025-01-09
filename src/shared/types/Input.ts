export interface Input {
	text: string,
	type: string,
	name: string,
	pattern?: string,
	messageOnInvalid?: string,
	minLength?: number,
}