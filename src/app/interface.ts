export interface CartItem {
	id: number;
	nameRu: string;
	price: number;
	weight: number;
	imageUrl: string;
	count: number;
}

export interface Location {
	pathname: string;
	search: string;
	hash: string;
	state: unknown;
	key: string;
}