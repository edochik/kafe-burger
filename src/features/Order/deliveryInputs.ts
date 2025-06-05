import { Input } from "@shared/types/Input";

export const deliveryInputs: Input[] = [
	{
		text: 'Улица, дом, квартира',
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
	}]
