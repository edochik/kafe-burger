interface DeliveryMethods  {
	id: number;
	nameEn: string;
	nameRu: string;
}

export const deliveryMethods : DeliveryMethods [] = [
	{ id: 1, nameEn: "pickup", nameRu: "самовывоз" },
	{ id: 2, nameEn: "delivery", nameRu: "доставка" },
];
