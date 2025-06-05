import { Input } from "@shared/types/Input";

export const authorizationInputs: Input[] = [
	{
		text: 'Логин',
		type: 'text',
		name: 'login',
		pattern: "[a-zA-Z ]*",
		messageOnInvalid: "Используйте латиницу",
		minLength: 3
	},
	{
		text: 'Пароль',
		type: 'password',
		name: 'password',
		minLength: 6
	}]
