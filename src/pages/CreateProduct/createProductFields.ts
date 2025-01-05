interface CreateProductFields {
	text: string,
	type: string,
	name: string,
	ariaLabel: string,
	pattern?: string,
	messageOnInvalid?: string,
}

export const createProductFields: CreateProductFields[] = [{
	text: 'Название ru:',
	type: 'text',
	name: 'nameRu',
	ariaLabel: 'Название продукта кириллица',
	pattern: "[а-яёА-ЯЁ]*",
	messageOnInvalid: "Только кириллические буквы"
}, {
	text: 'Название en:',
	type: 'text',
	name: 'nameEn',
	ariaLabel: 'Название продукта латиница',
	pattern: "[a-zA-Z]*",
	messageOnInvalid: "Только латинские буквы"
}, {
	text: 'Стоимость:',
	type: 'text',
	name: 'price',
	ariaLabel: 'стоимость',
	pattern: "[0-9]*",
	messageOnInvalid: "Только цифры"
}, {
	text: 'Вес:',
	type: 'text',
	name: 'weight',
	ariaLabel: 'Вес продукта',
	pattern: "[0-9]*",
	messageOnInvalid: "Только цифры"
}, {
	text: 'Калорий:',
	type: 'text',
	name: 'kilocalories',
	ariaLabel: 'Калорийность продукта',
	pattern: "[0-9]*",
	messageOnInvalid: "Только цифры"
}, {
	text: 'Композиция:',
	type: 'text',
	name: 'composition',
	ariaLabel: 'Ингредиенты',
	pattern: "[а-яёА-ЯЁ|]*",
	messageOnInvalid: "Пример: Бургеры|картошка фри|Кола"
}, {
	text: 'Путь картинки:',
	type: 'text',
	name: 'imageUrl',
	ariaLabel: 'Фотография с интернета',
}]