interface ProfileFields {
	text: string,
	type: string,
	name: string,
	pattern?: string,
	messageOnInvalid?: string
}

export const profileFields: ProfileFields[] = [{
	text: 'Имя:',
	type: 'text',
	name: 'firstName',
	pattern: "[а-яёА-ЯЁ]*",
	messageOnInvalid: "Используйте кириллицу"
}, {
	text: 'Фамилия:',
	type: 'text',
	name: 'lastName',
	pattern: "[а-яёА-ЯЁ]*",
	messageOnInvalid: "Используйте кириллицу"
}, {
	text: 'Почта:',
	type: 'email',
	name: 'email',
}, {
	text: 'Телефон:',
	type: 'text',
	name: 'phone',
}, {
	text: 'Адрес:',
	type: 'text',
	name: 'address',
}, {
	text: 'Этаж:',
	type: 'text',
	name: 'floor',
}, {
	text: 'Квартира:',
	type: 'text',
	name: 'apartment',
}, {
	text: 'Логин:',
	type: 'text',
	name: 'login',
}]

// {
// 	"id": 0,
// 	"firstName": "admin",
// 	"lastName": "admin",
// 	"email": "admin@mail.ru",
// 	"phone": "79081231212",
// 	"address": "улица админа",
// 	"floor": "1",
// 	"apartment": "1",
// 	"login": "superAdmin"
// }