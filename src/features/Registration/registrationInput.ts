import { Input } from "../../shared/types/Input";

export const registrationInput: Input[] = [
	{
		text: 'Имя',
		type: 'text',
		name: 'firstName',
		pattern: "[а-яёА-ЯЁ]*",
		messageOnInvalid: "Используйте кириллицу",
		minLength: 3
	}, {
		text: 'Фамилия',
		type: 'text',
		name: 'lastName',
		pattern: "[а-яёА-ЯЁ]*",
		messageOnInvalid: "Используйте кириллицу",
		minLength: 3
	}, {
		text: 'Почта',
		type: 'email',
		name: 'email',
	}, {
		text: 'Адрес',
		type: 'text',
		name: 'address',
	}, {
		text: 'Этаж',
		type: 'text',
		name: 'floor',
	}, {
		text: 'Квартира',
		type: 'text',
		name: 'apartment',
	}, {
		text: 'Логин',
		type: 'text',
		name: 'login',
		pattern: "[a-zA-Z]*",
		messageOnInvalid: "Используйте латиницу",
		minLength: 3
	}, {
		text: 'Пароль',
		type: 'password',
		name: 'password',
		minLength: 6
	}]
