export function validationWordCyrilliс(arg: string, value: string) {
	if (!/^[а-яё]*$/gi.test(arg)) {
		return `${value} может содержать только кириллические буквы  от "а" до "я" | от "А" до "Я".`;
	}
	return "";
}


export function validationWordLatin(arg: string, value: string) {
	if (!/^[a-z]*$/gi.test(arg)) {
		return `${value} может содержать только кириллические буквы  от "a" до "z" | от "A" до "Z".`;
	}
	return "";
}

