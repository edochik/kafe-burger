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
	pattern: "[а-яёА-ЯЁ ]*",
	messageOnInvalid: "Используйте кириллицу"
}, {
	text: 'Название en:',
	type: 'text',
	name: 'nameEn',
	ariaLabel: 'Название продукта латиница',
	pattern: "[a-zA-Z ]*",
	messageOnInvalid: "Используйте латиницу"
}, {
	text: 'Стоимость:',
	type: 'text',
	name: 'price',
	ariaLabel: 'стоимость',
	pattern: "[0-9]*",
	messageOnInvalid: "Используйте цифры"
}, {
	text: 'Вес:',
	type: 'text',
	name: 'weight',
	ariaLabel: 'Вес продукта',
	pattern: "[0-9]*",
	messageOnInvalid: "Используйте цифры"
}, {
	text: 'Калорий:',
	type: 'text',
	name: 'kilocalories',
	ariaLabel: 'Калорийность продукта',
	pattern: "[0-9]*",
	messageOnInvalid: "Используйте цифры"
}, {
	text: 'Композиция ru:',
	type: 'text',
	name: 'composition',
	ariaLabel: 'Ингредиенты',
	messageOnInvalid: "Используйте кириллицу. Пример: Бургеры|картошка фри|Кола"
}, {
	text: 'Ссылка картинки:',
	type: 'text',
	name: 'imageUrl',
	pattern: "(https?://.*)?\\.(jpg|png|webp)$",
	ariaLabel: 'Ссылка фотографии',
	messageOnInvalid: 'URL должен содержать допустимое расширение jpg, png или webp',
}]

