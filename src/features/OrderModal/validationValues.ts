import { InputValues } from "./interface";

type SetInputValues = React.Dispatch<React.SetStateAction<InputValues>>;

export function validationValues(
	event: React.ChangeEvent<HTMLInputElement> | string,
	name: string,
	fn: SetInputValues) {
	const value = typeof event === "string" ? event : event.target.value;
	if (name === "phone" && /^[0-9]*$/.test(value)) {
		fn((prev) => ({ ...prev, [name]: value }));
	}
	if (name === "name" && /^[а-яё|a-z| ]*$/gi.test(value)) {
		fn((prev) => ({ ...prev, [name]: value }));
	}
	if (name === "floor" && /^[0-9]*$/.test(value)) {
		fn((prev) => ({ ...prev, [name]: value }));
	}
	if (name === "address" || name === "apartment") {
		fn((prev) => ({ ...prev, [name]: value }));
	}
}

// по сути интпут делится на тот в котором только 
// - только цифры => number
// - только буквы => string
// - буквы и цифры => number | string
// - чтобы была одна функция так как input очень много
// - теста будет 4, 1. Number, 2. String, 3. Number-String, 4. react-phone-input-2